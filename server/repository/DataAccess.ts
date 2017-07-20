import Mongoose = require("mongoose");
import Config = require("./../config/database");

class DataAccess {
    static mongooseInstance: any;
    static mongooseConnection: Mongoose.Connection;

    constructor() {
        DataAccess.connect();
    }

    static connect(): Mongoose.Connection {
        if (this.mongooseInstance) return this.mongooseInstance;

        this.mongooseConnection = Mongoose.connection;
        this.mongooseConnection.once("open", () => {
            console.log("Connected to mongodb.");
        });

        this.mongooseInstance = Mongoose.connect(Config.DB_CONNECTION_STRING);
        return this.mongooseInstance;
    }
}

DataAccess.connect();
export = DataAccess;