import {DataAccess} from './DataAccess';
import {IDocument} from '../models/interface/IDocument';

let mongoose = DataAccess.mongooseInstance;
let mongooseConnection = DataAccess.mongooseConnection;

class DocumentSchema {

    static get schema() {
        return mongoose.Schema({
            uuid: {
                type: String,
                required: true
            },
            openUserUuid: {
                type: String
            },
            deviceUuid: {
                type: String
            },
            version: {
                type: String
            },
            number: {
                type: Number
            },
            storeUuid: {
                type: String
            },
            type: {
                type: String
            }
        });
    }
}

let DocumentRepository = mongooseConnection.model<IDocument>("Document", DocumentSchema.schema, 'document');
export {DocumentRepository};