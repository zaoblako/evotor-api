import {IStore} from './interface/IStore';

class StoreModel {

    private _storeModel: IStore;

    constructor(storeModel: IStore) {
        this._storeModel = storeModel;
    }

    get id(): string {
        return this._storeModel._id;
    }

    get name(): string {
        return this._storeModel.name;
    }

    get address(): string {
        return this._storeModel.address;
    }

}

Object.seal(StoreModel);
export {StoreModel};