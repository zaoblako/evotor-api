import {IEvent} from './interface/IEvent';

class EventModel {

    private _eventModel: IEvent;

    constructor(eventModel: IEvent) {
        this._eventModel = eventModel;
    }

    get subscriptionId(): string {
        return this._eventModel.purchaseOrderId;
    }

    get productId(): string {
        return this._eventModel.productId;
    }

    get userId(): string {
        return this._eventModel.userId;
    }

    get timestamp(): string {
        return this._eventModel.timestamp;
    }

    get sequenceNumber(): number {
        return this._eventModel.sequenceNumber;
    }

    get type(): string {
        return this._eventModel.type;
    }

    get planId(): string {
        return this._eventModel.planId;
    }

    get trialPeriodDuration(): string {
        return this._eventModel.trialPeriod;
    }

    get deviceNumber(): number {
        return this._eventModel.deviceNumber;
    }
}

Object.seal(EventModel);
export {EventModel};