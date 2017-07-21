import {IApplication} from './IApplication';

class ApplicationModel {

    private _applicationModel: IApplication;

    constructor(applicationModel: IApplication) {
        this._applicationModel = applicationModel;
    }

    get name(): string {
        return this._applicationModel.name;
    }

    get systemId(): string {
        return this._applicationModel.systemId;
    }

    get token(): string {
        return this._applicationModel.token;
    }

}

Object.seal(ApplicationModel);
export {ApplicationModel};