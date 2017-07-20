"use strict";
var UserModel = (function () {
    function UserModel(userModel) {
        this._userModel = userModel;
    }
    Object.defineProperty(UserModel.prototype, "email", {
        get: function () {
            return this._userModel.email;
        },
        enumerable: true,
        configurable: true
    });
    return UserModel;
}());
Object.seal(UserModel);
module.exports = UserModel;
//# sourceMappingURL=UserModel.js.map