import mongoose = require("mongoose");

interface IReceiptItem extends mongoose.Document {
    productId: string,
    name: string,
    measureName: string,
    quantity: number,
    price: number,
    costPrice: number,
    sumPrice: number,
    tax: number,
    taxPercent: number,
    discount: number,
    receiptId: string
}

export {IReceiptItem};