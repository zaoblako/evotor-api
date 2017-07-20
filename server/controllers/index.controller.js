"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserRepository = require("../repository/UserRepositroy");
var IndexController = (function () {
    function IndexController() {
    }
    IndexController.read = function (req, res) {
        UserRepository.create({ email: "asd@asd.com" }).then(function (user) {
            console.log(user);
        }).catch(function (err) {
            console.log(err);
        });
        try {
            UserRepository.find(function (error, result) {
                if (error)
                    res.send({ "error": "error" });
                else
                    res.send(result);
            });
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    };
    return IndexController;
}());
exports.default = IndexController;
//# sourceMappingURL=index.controller.js.map