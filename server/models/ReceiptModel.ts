import {IReceipt} from './interface/IReceipt';

class ReceiptModel {

    private _receiptModel: IReceipt;

    constructor(receiptModel: IReceipt) {
        this._receiptModel = receiptModel;
    }

    get uuid(): string {
        return this._receiptModel.uuid;
    }

    get deviceId(): string {
        return this._receiptModel.deviceId;
    }

    get dateTime(): number {
        return this._receiptModel.dateTime;
    }

    get type(): string {
        return this._receiptModel.type;
    }

    get storeId(): string {
        return this._receiptModel.storeId;
    }

    get shiftId(): string {
        return this._receiptModel.shiftId;
    }

    get employeeId(): string {
        return this._receiptModel.employeeId;
    }

    get paymentSource(): string {
        return this._receiptModel.paymentSource;
    }

    get infoCheck(): boolean {
        return this._receiptModel.infoCheck;
    }

    get egais(): boolean {
        return this._receiptModel.egais;
    }

    get totalTax(): number {
        return this._receiptModel.totalTax;
    }

    get totalDiscount(): number {
        return this._receiptModel.totalDiscount;
    }

    get totalAmount(): number {
        return this._receiptModel.totalAmount;
    }

    get extras(): object {
        return this._receiptModel.extras;
    }

}

Object.seal(ReceiptModel);
export {ReceiptModel};