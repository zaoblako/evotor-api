import mongoose = require("mongoose");

interface IDocument extends mongoose.Document {
    uuid: string,
    openUserUuid: string,
    type: string,
    deviceUuid: string,
    version:string,
    number: number,
    storeUuid: string
}

export { IDocument };