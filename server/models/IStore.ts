import mongoose = require("mongoose");

interface IStore extends mongoose.Document {
    _id: string;
    name: string,
    address: string
}

export {IStore};