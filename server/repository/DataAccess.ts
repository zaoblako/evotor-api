import Mongoose = require("mongoose");
import {Config} from "./../config/Database";

class DataAccess {
    static mongooseInstance: any;
    public static mongooseConnection: Mongoose.Connection;

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
export {DataAccess};