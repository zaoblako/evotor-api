import {IUser} from './IUser';

class UserModel {

    private _userModel: IUser;

    constructor(userModel: IUser) {
        this._userModel = userModel;
    }

    get id(): string {
        return this._userModel._id;
    }

    get username(): string {
        return this._userModel.username;
    }

    get token(): string {
        return this._userModel.token;
    }

}

Object.seal(UserModel);
export {UserModel};