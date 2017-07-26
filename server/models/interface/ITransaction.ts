import mongoose = require("mongoose");

interface ITransaction extends mongoose.Document {
    uuid: string,
    type: string,
    userCode: string,
    userUuid: string,
    creationDate: number,
    price: number,
    resultSum: number,
    costPrice: number,
    quantity: number,
    sum: number,
    measureName: string,
    resultPrice: number,
    paymentType: string,
    documentUuid: string
}

export {ITransaction};