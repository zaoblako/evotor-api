import * as bodyParser from "body-parser";
import config from "./config";
import * as cookieParser from "cookie-parser";
import * as express from "express";
import * as logger from "morgan";
import * as path from "path";

export class ExpressConfig {

    config() {

        let app: express.Express = express();

        for (let model of config.globFiles(config.models)) {
            require(path.resolve(model));
        }

        app.use(logger("dev"));
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({extended: false}));
        app.use(cookieParser());

        for (let route of config.globFiles(config.routes)) {
            require(path.resolve(route)).default(app);
        }

        app.use((req: express.Request, res: express.Response, next: Function): void => {
            let err: Error = new Error("Not Found");
            next(err);
        });

        app.use((err: any, req: express.Request, res: express.Response, next): void => {
            res.status(err.status || 500).render("error", {
                message: err.message,
                error: {}
            });
        });

        if (app.get("env") === "development") {
            app.use((err: Error, req: express.Request, res: express.Response, next): void => {
                res.status(500).render("error", {
                    message: err.message,
                    error: err
                });
            });
        }

        return app;

    };
}