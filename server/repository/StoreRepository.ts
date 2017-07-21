import {DataAccess} from './DataAccess';
import {IStore} from "../models/IStore";

let mongoose = DataAccess.mongooseInstance;
let mongooseConnection = DataAccess.mongooseConnection;

class StoreSchema {

    static get schema() {
        return mongoose.Schema({
            _id: {
                type: String,
                required: true
            },
            name: {
                type: String
            },
            address: {
                type: String
            }
        });
    }
}

let StoreRepository = mongooseConnection.model<IStore>("User", StoreSchema.schema, 'store');
export {StoreRepository};