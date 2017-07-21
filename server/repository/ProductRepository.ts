import {DataAccess} from './DataAccess';
import {IProduct} from '../models/IProduct';

let mongoose = DataAccess.mongooseInstance;
let mongooseConnection = DataAccess.mongooseConnection;

class ProductSchema {

    static get schema() {
        return mongoose.Schema({
            name: {
                type: String,
                required: true
            }
        });
    }
}

let ProductRepository = mongooseConnection.model<IProduct>("Product", ProductSchema.schema, 'product');
export {ProductRepository};