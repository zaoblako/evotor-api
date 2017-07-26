import { IApplication } from './interface/IApplication';

class ApplicationModel {

    private _applicationModel: IApplication;

    constructor(applicationModel: IApplication) {
        this._applicationModel = applicationModel;
    }

    get name(): string {
        return this._applicationModel.name;
    }

    get token(): string {
        return this._applicationModel.token;
    }

    get productId(): string {
        return this._applicationModel.productId;
    }

}

Object.seal(ApplicationModel);
export { ApplicationModel };