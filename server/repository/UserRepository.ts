import DataAccess = require('./DataAccess');
import IUser = require("../models/IUser");

let mongoose = DataAccess.mongooseInstance;
let mongooseConnection = DataAccess.mongooseConnection;

class UserSchema {

    static get schema() {
        return mongoose.Schema({
            email: {
                type: String,
                required: true
            }
        });
    }
}

let schema = mongooseConnection.model<IUser>("User", UserSchema.schema);
export = schema;