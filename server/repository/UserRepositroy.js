"use strict";
var DataAccess = require("./DataAccess");
var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;
var UserSchema = (function () {
    function UserSchema() {
    }
    Object.defineProperty(UserSchema, "schema", {
        get: function () {
            return mongoose.Schema({
                email: {
                    type: String,
                    required: true
                }
            });
        },
        enumerable: true,
        configurable: true
    });
    return UserSchema;
}());
var schema = mongooseConnection.model("User", UserSchema.schema);
module.exports = schema;
//# sourceMappingURL=UserRepositroy.js.map