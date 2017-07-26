import {Request, Response} from 'express';
import {ReceiptRepository} from "../repository/ReceiptRepository";
import {IReceipt} from "../models/interface/IReceipt";
import {ReceiptItemRepository} from "../repository/ReceiptItemRepository";

/**
 * @class EventController
 */
class ReceiptController {

    /**
     * Отправить чек (V2)
     *
     * @headers Authorization
     *
     * @error 400 Ошибка в запросе
     * @error 401 Неверный токен облака Эвотор
     * @error 402 Требуется оплата
     * @error 404 Отсутствует указанный ресурс
     * @error 405 Терминал неактивен
     *
     * @return 200 OK
     *
     * @param {e.Request} req
     * @param {e.Response} res
     */
    public static create(req: Request, res: Response) {

        let receipts = req.body;
        let self = this;

        if (receipts && receipts.length > 0) {
            receipts.forEach((receipt, key) => {
                ReceiptController.createReceipt(receipt).then(() => {
                    if (key === (receipts.length - 1)) {
                        return res.status(200).end();
                    }
                }).catch((err) => {
                    console.log(err);
                    return res.status(400).json(err).end();
                });
            });
        }
        else {
            ReceiptController.createReceipt(receipts).then(() => {
                return res.status(200).end();
            }).catch((err) => {
                console.log(err);
                return res.status(400).json(err).end();
            });
        }
    }

    /**
     * @return {Promise}
     * @param receipt
     */
    private static createReceipt(receipt) {
        return new Promise(function (resolve, reject) {
            ReceiptRepository.findOne({id: receipt.data.id}, (err, r: IReceipt) => {
                if (err) {
                    return reject(err);
                }
                if (!r) {
                    ReceiptRepository.create({
                        id: receipt.data.id,
                        deviceId: receipt.data.deviceId,
                        storeId: receipt.data.storeId,
                        dateTime: receipt.data.dateTime,
                        type: receipt.data.type,
                        shiftId: receipt.data.shiftId,
                        employeeId: receipt.data.employeeId,
                        paymentSource: receipt.data.paymentSource,
                        infoCheck: receipt.data.infoCheck,
                        egais: receipt.data.egais,
                        totalTax: receipt.data.totalTax,
                        totalDiscount: receipt.data.totalDiscount,
                        totalAmount: receipt.data.totalAmount,
                        extras: receipt.data.extras
                    }).then((instance: IReceipt) => {
                        if (receipt.data.items && receipt.data.items.length > 0) {
                            receipt.data.items.forEach((item, ikey) => {
                                item.receiptId = receipt.data.id;
                                item.productId = item.id;
                                delete item.id;
                                ReceiptItemRepository.create(item).then(() => {
                                    if (ikey === (receipt.data.items.length - 1)) {
                                        return resolve();
                                    }
                                }).catch((err) => {
                                    return reject(err);
                                });
                            });
                        }
                        else {
                            return resolve();
                        }
                    }).catch((err) => {
                        return reject(err);
                    });
                }
                else {
                    return resolve();
                }
            });
        });
    }
}

export {ReceiptController};