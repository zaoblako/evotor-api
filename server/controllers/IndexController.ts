import {Request, Response} from 'express';

import * as  simpleGit from 'simple-git';

import * as moment from 'moment';


export default class IndexController {

    protected static versions: any = "";
    protected static started: any = moment();
    protected static log: any = "";

    constructor() {

        let self = this;
        IndexController.versions = require('../../package.json');
        let git = simpleGit(__dirname + '/../');

        console.log('API Version: ' + IndexController.versions.version);
        console.log('API Release: ' + IndexController.versions.release);
        console.log('Environment: ' + process.env.NODE_ENV);

        git.log(function (err, logs) {
            IndexController.log = logs;
        });
    }

    public static version(req: Request, res: Response): void {
        if (req.method === 'GET') {
            res.json({
                started: IndexController.started.format('DD.MM.YYYY HH:mm:ss'),
                uptime: moment().diff(IndexController.started, 'minutes'),
                version: IndexController.versions.version,
                update: IndexController.log ? moment(IndexController.log.latest.date, 'YYYY-MM-DD hh:mm:ss ZZ').format('DD.MM.YYYY HH:mm:ss') : moment().format('DD.MM.YYYY HH:mm:ss'),
                updatedBy: IndexController.log ? IndexController.log.latest.author_name : ''
            });
        }

    }
}