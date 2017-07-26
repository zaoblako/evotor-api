import {IProduct} from './interface/IProduct';

class ProductModel {

    private _productModel: IProduct;

    constructor(productModel: IProduct) {
        this._productModel = productModel;
    }

    get name(): string {
        return this._productModel.name;
    }

}

Object.seal(ProductModel);
export {ProductModel};