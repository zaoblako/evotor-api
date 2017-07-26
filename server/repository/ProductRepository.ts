import {DataAccess} from './DataAccess';
import {IProduct} from '../models/interface/IProduct';

let mongoose = DataAccess.mongooseInstance;
let mongooseConnection = DataAccess.mongooseConnection;

class ProductSchema {

    static get schema() {
        return mongoose.Schema({
            uuid: {
                type: String,
                required: true
            },
            code: {
                type: String,
                required: true
            },
            barCodes: {
                type: Array
            },
            alcoCodes: {
                type: Array
            },
            name: {
                type: String,
                required: true
            },
            price: {
                type: Number
            },
            quantity: {
                type: Number
            },
            costPrice: {
                type: Number
            },
            measureName: {
                type: String
            },
            tax: {
                type: String
            },
            allowToSell: {
                type: Boolean
            },
            description: {
                type: String
            },
            articleNumber: {
                type: String
            },
            parentUuid: {
                type: String
            },
            group: {
                type: Boolean
            },
            type: {
                type: String
            },
            alcoholByVolume: {
                type: Number
            },
            alcoholProductKindCode: {
                type: Number
            },
            tareVolume: {
                type: Number
            },
            storeUuid: {
                type: String
            }
        });
    }
}

let ProductRepository = mongooseConnection.model<IProduct>("Product", ProductSchema.schema, 'product');
export {ProductRepository};