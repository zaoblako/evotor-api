import {IStoreEmployee} from './interface/IStoreEmployee';

class StoreEmployeeModel {

    private _storeEmployeeModel: IStoreEmployee;

    constructor(storeEmployeeModel: IStoreEmployee) {
        this._storeEmployeeModel = storeEmployeeModel;
    }

    get employeeId(): string {
        return this._storeEmployeeModel.employeeId;
    }

    get storeId(): string {
        return this._storeEmployeeModel.storeId;
    }

}

Object.seal(StoreEmployeeModel);
export {StoreEmployeeModel};