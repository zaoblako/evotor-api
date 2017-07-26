import Mongoose = require("mongoose");
import {Config} from "./../config/Database";
import * as winston from 'winston';

class DataAccess {
    static mongooseInstance: any;
    public static mongooseConnection: Mongoose.Connection;

    constructor() {
        DataAccess.connect();
    }

    static connect(): Mongoose.Connection {

        let logger = winston.loggers.get('default');

        Mongoose.Promise = require('bluebird');

        if (this.mongooseInstance) return this.mongooseInstance;

        this.mongooseConnection = Mongoose.connection;
        this.mongooseConnection.once("open", () => {
            logger.info("[DB] Connected to", Config.DB_CONNECTION_STRING);
        });
        this.mongooseInstance = Mongoose;
        Mongoose.connect(Config.DB_CONNECTION_STRING, {useMongoClient: true}).then(() => {

        });
        return this.mongooseInstance;
    }
}

DataAccess.connect();
export {DataAccess};