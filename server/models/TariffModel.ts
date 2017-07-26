import {ITariff} from './interface/ITariff';

class TariffModel {

    private _tariffModel: ITariff;

    constructor(tariffModel: ITariff) {
        this._tariffModel = tariffModel;
    }

    get name(): string {
        return this._tariffModel.name;
    }

    get applicationId(): string {
        return this._tariffModel.applicationId;
    }

}

Object.seal(TariffModel);
export {TariffModel};