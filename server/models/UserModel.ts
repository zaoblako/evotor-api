import IUser = require('./IUser');

class UserModel {

    private _userModel: IUser;

    constructor(userModel: IUser) {
        this._userModel = userModel;
    }

    get email(): string {
        return this._userModel.email;
    }

}

Object.seal(UserModel);
export = UserModel;