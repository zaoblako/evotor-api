import mongoose = require("mongoose");

interface ITariff extends mongoose.Document {
    name: string,
    applicationId: string
}

export { ITariff };