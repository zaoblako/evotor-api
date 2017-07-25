import * as bodyParser from "body-parser";
import Config from "./Config";
import * as cookieParser from "cookie-parser";
import * as express from "express";
import * as morgan from "morgan";
import * as path from "path";
import * as winston from 'winston';
import * as moment from 'moment';
import * as chalk from 'chalk';
import * as morganBody from 'morgan-body';

require('events').EventEmitter.prototype._maxListeners = 50000;

export class ExpressConfig {

    config() {

        let app: express.Express = express();

        for (let model of Config.globFiles(Config.models)) {
            require(path.resolve(model));
        }

        winston.loggers.add('default', {
            console: {
                colorize: true,
                handleExceptions: true,
                json: false,
                level: process.env.NODE_ENV !== "production" ? 'debug' : 'error',
                prettyPrint: true,
                depth: 1,
                meta: true,
                expressFormat: true,
                timestamp: function () {
                    return '[' + moment().format('DD.MM.YYYY HH:mm:ss') + ']';
                }
            }, file: {
                level: 'debug',
                filename: path.join(__dirname, '../logs/debug.log'),
                prettyPrint: true,
                depth: 1,
                json: false,
                handleExceptions: true,
                humanReadableUnhandledException: true,
                timestamp: function () {
                    return '[' + moment().format('DD.MM.YYYY HH:mm:ss') + ']';
                }
            }
        });

        let logger = winston.loggers.get('default');

        morgan.token('body', function (req) {
            return (req.body ? "\n" + chalk.green(JSON.stringify(req.body, null, 2)) : chalk.red(null));
        });

        morgan.token('fullurl', function (req) {
            return chalk.blue(req.protocol + '://' + req.get('host') + req.originalUrl);
        });

        let stream = {
            write: function (message) {
                logger.debug("Request: \n" + message.split(';').join("\n"));
            }
        };

        app.use(bodyParser.json());

        app.use(cookieParser());

        app.use(morgan(":fullurl;From: :remote-addr;Remote: :req[X-Real-IP];Host: :req[Host];Method: :method;Url: :url;Time: :response-time ms;Authorization: :req[Authorization];X-Authorization: :req[X-Authorization];User-Agent: :user-agent;Body: :body;Status: :status", {stream: stream}));

        morganBody(app);

        for (let route of Config.globFiles(Config.routes)) {
            require(path.resolve(route)).default(app);
        }

        app.get('/favicon.ico', function (req, res) {
            return res.send({});
        });

        app.use((req: express.Request, res: express.Response, next: Function): void => {
            let err: Error = new Error("Not Found");
            next(err);
        });

        app.use((err: any, req: express.Request, res: express.Response, next): void => {
            res.status(err.status || 500).json({
                "error": {
                    message: err.message,
                    error: {}
                }
            });
        });

        if (process.env.NODE_ENV !== "production") {
            app.use((err: Error, req: express.Request, res: express.Response, next): void => {
                res.status(500).json({
                    "error": {
                        message: err.message,
                        error: err
                    }
                });
            });
        }

        return app;

    };
}