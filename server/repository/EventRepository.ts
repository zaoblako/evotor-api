import {DataAccess} from './DataAccess';
import {IEvent} from "../models/interface/IEvent";

let mongoose = DataAccess.mongooseInstance;
let mongooseConnection = DataAccess.mongooseConnection;

/**
 * Схема БД для приложений
 */
class EventSchema {

    static get schema() {
        return mongoose.Schema({
            subscriptionId: {
                type: String,
                required: true
            },
            productId: {
                type: String,
                required: true
            },
            userId: {
                type: String,
                required: true
            },
            timestamp: {
                type: Number
            },
            sequenceNumber: {
                type: Number
            },
            type: {
                type: String
            },
            planId: {
                type: String
            },
            trialPeriodDuration: {
                type: String
            },
            deviceNumber: {
                type: Number
            }
        });
    }
}

let EventRepository = mongooseConnection.model<IEvent>("Event", EventSchema.schema, 'event');

export {EventRepository};