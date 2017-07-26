import {DataAccess} from './DataAccess';
import {IStore} from "../models/interface/IStore";

let mongoose = DataAccess.mongooseInstance;
let mongooseConnection = DataAccess.mongooseConnection;

class StoreSchema {

    static get schema() {
        return mongoose.Schema({
            uuid: {
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

let StoreRepository = mongooseConnection.model<IStore>("Store", StoreSchema.schema, 'store');
export {StoreRepository};