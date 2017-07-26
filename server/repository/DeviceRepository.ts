import {DataAccess} from './DataAccess';
import {IDevice} from "../models/interface/IDevice";

let mongoose = DataAccess.mongooseInstance;
let mongooseConnection = DataAccess.mongooseConnection;

/**
 * Схема БД для приложений
 */
class DeviceSchema {

    static get schema() {
        return mongoose.Schema({
            uuid: {
                type: String,
                required: true
            },
            name: {
                type: String,
                required: true
            },
            storeUuid: {
                type: String,
                required: true
            }
        });
    }
}

let DeviceRepository = mongooseConnection.model<IDevice>("Device", DeviceSchema.schema, 'device');

export {DeviceRepository};