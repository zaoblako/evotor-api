import {IDocument} from './interface/IDocument';

class DocumentModel {

    private _documentModel: IDocument;

    constructor(documentModel: IDocument) {
        this._documentModel = documentModel;
    }

    get openUserUuid(): string {
        return this._documentModel.openUserUuid;
    }

    get uuid(): string {
        return this._documentModel.uuid;
    }

    get type(): string {
        return this._documentModel.type;
    }

    get deviceUuid(): string {
        return this._documentModel.deviceUuid;
    }

    get version(): string {
        return this._documentModel.version;
    }

    get number(): number {
        return this._documentModel.number;
    }

    get storeUuid(): string {
        return this._documentModel.storeUuid;
    }

}

Object.seal(DocumentModel);
export {DocumentModel};