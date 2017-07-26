import {DataAccess} from './DataAccess';
import {IReceiptItem} from '../models/interface/IReceiptItem';

let mongoose = DataAccess.mongooseInstance;
let mongooseConnection = DataAccess.mongooseConnection;

class ReceiptItemSchema {

    static get schema() {
        return mongoose.Schema({
            productId: {
                type: String,
                required: true
            },
            name: {
                type: String,
                required: true
            },
            measureName: {
                type: String
            },
            quantity: {
                type: Number
            },
            price: {
                type: Number
            },
            costPrice: {
                type: Number
            },
            sumPrice: {
                type: Number
            },
            tax: {
                type: Number
            },
            taxPercent: {
                type: Number
            },
            discount: {
                type: Number
            }
        });
    }
}

let ReceiptItemRepository = mongooseConnection.model<IReceiptItem>("ReceiptItem", ReceiptItemSchema.schema, 'receiptItem');
export {ReceiptItemRepository};