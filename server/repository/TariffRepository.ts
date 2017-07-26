import {DataAccess} from './DataAccess';
import {ITariff} from '../models/interface/ITariff';

let mongoose = DataAccess.mongooseInstance;
let mongooseConnection = DataAccess.mongooseConnection;

class TariffSchema {

    static get schema() {
        return mongoose.Schema({
            name: {
                type: String,
                required: true
            },
            applicationId: {
                type: String,
                required: true
            }
        });
    }
}

let TariffRepository = mongooseConnection.model<ITariff>("Tariff", TariffSchema.schema, 'tariff');
export {TariffRepository};