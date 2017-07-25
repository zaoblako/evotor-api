import mongoose = require("mongoose");

interface ITransaction extends mongoose.Document {
    type: string,
    uuid: string,
    id: string,
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
    documentId: string
}

export { ITransaction };