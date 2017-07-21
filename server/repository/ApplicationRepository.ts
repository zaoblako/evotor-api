import {DataAccess} from './DataAccess';
import {IApplication} from "../models/IApplication";

let mongoose = DataAccess.mongooseInstance;
let mongooseConnection = DataAccess.mongooseConnection;

/**
 * Схема БД для приложений
 */
class ApplicationSchema {

    static get schema() {
        return mongoose.Schema({
            email: {
                type: String,
                required: true
            }
        });
    }
}

let ApplicationRepository = mongooseConnection.model<IApplication>("Application", ApplicationSchema.schema, 'application');

export {ApplicationRepository};