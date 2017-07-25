import mongoose = require("mongoose");

interface IEmployee extends mongoose.Document {
    uuid: string,
    name: string,
    lastName: string,
    patronymicName: string,
    phone: string,
    role: string
}

export { IEmployee };