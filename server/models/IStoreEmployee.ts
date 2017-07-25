import mongoose = require("mongoose");

interface IStoreEmployee extends mongoose.Document {
    employeeId: string,
    storeId: string
}

export { IStoreEmployee };