import {DataAccess} from './DataAccess';
import {IReceipt} from '../models/interface/IReceipt';

let mongoose = DataAccess.mongooseInstance;
let mongooseConnection = DataAccess.mongooseConnection;

class ReceiptSchema {

    static get schema() {
        return mongoose.Schema({
            uuid: {
                type: String,
                required: true
            },
            deviceId: {
                type: String,
                required: true
            },
            dateTime: {
                type: Number
            },
            storeId: {
                type: String
            },
            shiftId: {
                type: String
            },
            employeeId: {
                type: String
            },
            paymentSource: {
                type: String
            },
            infoCheck: {
                type: Boolean
            },
            egais: {
                type: Boolean
            },
            totalTax: {
                type: Number
            },
            totalDiscount: {
                type: Number
            },
            totalAmount: {
                type: Number
            },
            extras: {
                type: Object
            },
            type: {
                type: String
            }
        });
    }
}

let ReceiptRepository = mongooseConnection.model<IReceipt>("Receipt", ReceiptSchema.schema, 'receipt');
export {ReceiptRepository};