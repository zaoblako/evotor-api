import mongoose = require("mongoose");

interface IDevice extends mongoose.Document {
    uuid: string,
    name: string,
    storeUuid: string
}

export { IDevice };