import mongoose = require("mongoose");

interface IStore extends mongoose.Document {
    uuid: string;
    name: string,
    address: string
}

export {IStore};