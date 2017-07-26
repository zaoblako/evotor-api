import {DataAccess} from './DataAccess';
import {IStoreEmployee} from "../models/interface/IStoreEmployee";

let mongoose = DataAccess.mongooseInstance;
let mongooseConnection = DataAccess.mongooseConnection;

class StoreEmployeeSchema {

    static get schema() {
        return mongoose.Schema({
            employeeId: {
                type: String,
                required: true
            },
            storeId: {
                type: String,
                required: true
            }
        });
    }
}

let StoreEmployeeRepository = mongooseConnection.model<IStoreEmployee>("StoreEmployee", StoreEmployeeSchema.schema, 'storeEmployee');
export {StoreEmployeeRepository};