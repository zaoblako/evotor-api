import mongoose = require("mongoose");

interface IUser extends mongoose.Document {
    email: string;
}

export = IUser;