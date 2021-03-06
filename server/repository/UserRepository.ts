import {DataAccess} from './DataAccess';
import {IUser} from "../models/interface/IUser";

let mongoose = DataAccess.mongooseInstance;
let mongooseConnection = DataAccess.mongooseConnection;

class UserSchema {

    static get schema() {
        return mongoose.Schema({
            _id: {
                type: String,
                required: true
            },
            plain: {
                type: String
            },
            username: {
                type: String
            },
            email: {
                type: String
            },
            password: {
                type: String
            },
            hasBilling: {
                type: Boolean
            },
            token: {
                type: String
            },
            accessToken: {
                type: String
            }
        });
    }
}

let UserRepository = mongooseConnection.model<IUser>("User", UserSchema.schema, 'user');
export {UserRepository};