import {Request, Response} from 'express';
import * as simpleGit from 'simple-git';
import * as moment from 'moment';

import * as winston from 'winston';
import {Version} from "../config/Version";

let logger = winston.loggers.get('default');
let git = simpleGit(__dirname + '/../');
let versions = require('../../package.json');
let log;

logger.info('API Version: ' + versions.version);
logger.info('Environment: ' + process.env.NODE_ENV);

git.log(function (err, logs) {
    log = logs;
});

/**
 * @class IndexController
 */
class IndexController {

    /**
     * Время старта API
     * @type {moment.Moment}
     */
    public static started: any = moment();

    /**
     * Возвращает сведения об API
     *
     * @return {Version}
     * @param {e.Request} req
     * @param {e.Response} res
     */
    public static version(req: Request, res: Response): void {
        let versions = require('../../package.json');

        let ApplicationVersion = new Version(IndexController.started.format('DD.MM.YYYY HH:mm:ss'),
            moment().diff(IndexController.started, 'minutes'),
            versions.version,
            (log ? moment(log.latest.date, 'YYYY-MM-DD hh:mm:ss ZZ').format('DD.MM.YYYY HH:mm:ss') : moment().format('DD.MM.YYYY HH:mm:ss')),
            (log ? log.latest.author_name : '')
        );

        return res.json(ApplicationVersion).end();
    }
}

export {IndexController};