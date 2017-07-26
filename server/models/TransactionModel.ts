import {ITransaction} from './interface/ITransaction';

class TransactionModel {

    private _transactionModel: ITransaction;

    constructor(transactionModel: ITransaction) {
        this._transactionModel = transactionModel;
    }

    get id(): string {
        return this._transactionModel.id;
    }

    get uuid(): string {
        return this._transactionModel.uuid;
    }

    get type(): string {
        return this._transactionModel.type;
    }

    get userCode(): string {
        return this._transactionModel.userCode;
    }

    get userUuid(): string {
        return this._transactionModel.userUuid;
    }

    get creationDate(): number {
        return this._transactionModel.creationDate;
    }

    get price(): number {
        return this._transactionModel.price;
    }

    get resultSum(): number {
        return this._transactionModel.resultSum;
    }

    get costPrice(): number {
        return this._transactionModel.costPrice;
    }

    get quantity(): number {
        return this._transactionModel.quantity;
    }

    get sum(): number {
        return this._transactionModel.sum;
    }

    get measureName(): string {
        return this._transactionModel.measureName;
    }

    get resultPrice(): number {
        return this._transactionModel.resultPrice;
    }

    get paymentType(): string {
        return this._transactionModel.paymentType;
    }

    get documentId(): string {
        return this._transactionModel.documentId;
    }

}

Object.seal(TransactionModel);
export {TransactionModel};