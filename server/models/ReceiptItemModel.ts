import {IReceiptItem} from './interface/IReceiptItem';

class ReceiptItemModel {

    private _receiptItemModel: IReceiptItem;

    constructor(receiptItemModel: IReceiptItem) {
        this._receiptItemModel = receiptItemModel;
    }

    get productId(): string {
        return this._receiptItemModel.productId;
    }

    get name(): string {
        return this._receiptItemModel.name;
    }

    get measureName(): string {
        return this._receiptItemModel.measureName;
    }

    get quantity(): number {
        return this._receiptItemModel.quantity;
    }

    get price(): number {
        return this._receiptItemModel.price;
    }

    get costPrice(): number {
        return this._receiptItemModel.costPrice;
    }

    get sumPrice(): number {
        return this._receiptItemModel.sumPrice;
    }

    get tax(): number {
        return this._receiptItemModel.tax;
    }

    get taxPercent(): number {
        return this._receiptItemModel.taxPercent;
    }

    get discount(): number {
        return this._receiptItemModel.discount;
    }

    get receiptId(): string {
        return this._receiptItemModel.receiptId;
    }
}

Object.seal(ReceiptItemModel);
export {ReceiptItemModel};