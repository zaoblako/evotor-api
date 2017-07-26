import {IDevice} from './interface/IDevice';

class DeviceModel {

    private _deviceModel: IDevice;

    constructor(deviceModel: IDevice) {
        this._deviceModel = deviceModel;
    }

    get name(): string {
        return this._deviceModel.name;
    }

    get uuid(): string {
        return this._deviceModel.uuid;
    }

    get storeUuid(): string {
        return this._deviceModel.storeUuid;
    }

}

Object.seal(DeviceModel);
export {DeviceModel};