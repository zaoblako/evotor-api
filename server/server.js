"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
var config_1 = require("./config/config");
var express_1 = require("./config/express");
var app = new express_1.ExpressConfig().config();
var server = http.createServer(app);
server.listen(config_1.default.port);
server.on("error", function (e) {
    console.log("Error starting server" + e);
});
server.on("listening", function () {
    console.log("[HTTP] Server started on port " + config_1.default.port);
});
//# sourceMappingURL=server.js.map