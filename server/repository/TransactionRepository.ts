import {DataAccess} from './DataAccess';
import {ITransaction} from '../models/interface/ITransaction';

let mongoose = DataAccess.mongooseInstance;
let mongooseConnection = DataAccess.mongooseConnection;

class TransactionSchema {

    static get schema() {
        return mongoose.Schema({
            id: {
                type: String,
                required: true
            },
            uuid: {
                type: String,
                required: true
            },
            type: {
                type: String
            },
            userCode: {
                type: String
            },
            userUuid: {
                type: String
            },
            creationDate: {
                type: Number
            },
            price: {
                type: Number
            },
            resultSum: {
                type: Number
            },
            costPrice: {
                type: Number
            },
            quantity: {
                type: Number
            },
            sum: {
                type: Number
            },
            measureName: {
                type: String
            },
            resultPrice: {
                type: Number
            },
            paymentType: {
                type: String
            },
            documentId: {
                type: String
            }
        });
    }
}

let TransactionRepository = mongooseConnection.model<ITransaction>("Transaction", TransactionSchema.schema, 'transaction');
export {TransactionRepository};