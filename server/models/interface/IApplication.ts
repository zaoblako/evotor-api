import mongoose = require("mongoose");

interface IApplication extends mongoose.Document {
    name: string;
    systemId: string,
    token: string,
    productId: string
}

export { IApplication };