import { IDevice } from './interface/IDevice';

class DeviceModel {

    private deviceModel: IDevice;

    constructor(applicationModel: IDevice) {
        this.deviceModel = applicationModel;
    }

    get name(): string {
        return this.deviceModel.name;
    }

    get uuid(): string {
        return this.deviceModel.uuid;
    }

    get storeUuid(): string {
        return this.deviceModel.storeUuid;
    }

}

Object.seal(DeviceModel);
export { DeviceModel };