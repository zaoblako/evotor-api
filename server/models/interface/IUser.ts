import mongoose = require("mongoose");

interface IUser extends mongoose.Document {
    _id: string;
    username: string,
    plain: string,
    password: string,
    accessToken: string,
    hasBilling: boolean,
    token: string
}

export {IUser};