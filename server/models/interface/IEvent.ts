import mongoose = require("mongoose");

interface IEvent extends mongoose.Document {
    purchaseOrderId: string,
    productId: string,
    userId: string,
    timestamp: string,
    sequenceNumber: number,
    type: string,
    planId: string,
    trialPeriod: string,
    deviceNumber: number
}

export {IEvent};