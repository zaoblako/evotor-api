"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var glob_1 = require("glob");
var lodash_1 = require("lodash");
var Config = (function () {
    function Config() {
    }
    Config.globFiles = function (location) {
        return lodash_1.union([], glob_1.sync(location));
    };
    Config.port = 3000;
    Config.routes = "./server/routes/**/*.js";
    Config.models = "./server/models/**/*.js";
    return Config;
}());
exports.default = Config;
//# sourceMappingURL=config.js.map