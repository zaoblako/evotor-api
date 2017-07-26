import mongoose = require("mongoose");

interface IProduct extends mongoose.Document {
    uuid: string;
    code: string,
    barCodes: Array<string>,
    alcoCodes: Array<string>,
    name: string,
    price: number;
    quantity: number;
    costPrice: number;
    measureName: string;
    tax: string,
    allowToSell: boolean,
    description: string,
    articleNumber: string,
    parentUuid: string,
    group: boolean,
    type: string,
    alcoholByVolume: number,
    alcoholProductKindCode: number,
    tareVolume: number,
    storeUuid: string
}

export {IProduct};