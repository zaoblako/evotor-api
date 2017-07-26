import mongoose = require("mongoose");

interface IReceipt extends mongoose.Document {
    uuid: string,
    deviceId: string,
    dateTime: number,
    type: string,
    storeId: string,
    shiftId: string,
    employeeId: string,
    paymentSource: string,
    infoCheck: boolean,
    egais: boolean,
    totalTax: number,
    totalDiscount: number,
    totalAmount: number,
    extras: object
}

export { IReceipt };