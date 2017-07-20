"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_controller_1 = require("../controllers/index.controller");
var IndexRoute = (function () {
    function IndexRoute(app) {
        app.route("/")
            .get(index_controller_1.default.read);
    }
    return IndexRoute;
}());
exports.default = IndexRoute;
//# sourceMappingURL=index.route.js.map