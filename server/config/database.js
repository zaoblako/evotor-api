"use strict";
var Constants = (function () {
    function Constants() {
    }
    Constants.DB_CONNECTION_STRING = process.env.NODE_ENV === 'production' ? process.env.dbURI : "mongodb://localhost:27017/tanks";
    return Constants;
}());
Object.seal(Constants);
module.exports = Constants;
//# sourceMappingURL=database.js.map