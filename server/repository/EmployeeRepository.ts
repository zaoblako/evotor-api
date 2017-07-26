import {DataAccess} from './DataAccess';
import {IEmployee} from '../models/interface/IEmployee';

let mongoose = DataAccess.mongooseInstance;
let mongooseConnection = DataAccess.mongooseConnection;

class EmployeeSchema {

    static get schema() {
        return mongoose.Schema({
            uuid: {
                type: String,
                required: true
            },
            name: {
                type: String
            },
            lastName: {
                type: String
            },
            patronymicName: {
                type: String
            },
            phone: {
                type: String
            },
            role: {
                type: String
            }
        });
    }
}

let EmployeeRepository = mongooseConnection.model<IEmployee>("Employee", EmployeeSchema.schema, 'employee');
export {EmployeeRepository};