import mongoose = require("mongoose");

interface IEvent extends mongoose.Document {
    subscriptionId: string,
    productId: string,
    userId: string,
    timestamp: number,
    sequenceNumber: number,
    type: string,
    planId: string,
    trialPeriodDuration: string,
    deviceNumber: number
}

export { IEvent };