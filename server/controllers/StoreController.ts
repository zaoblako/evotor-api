import {Request, Response} from 'express';
import {StoreRepository} from "../repository/StoreRepository";
import {IStore} from "../models/interface/IStore";
import {ProductRepository} from "../repository/ProductRepository";
import {IProduct} from "../models/interface/IProduct";
import {DeviceRepository} from "../repository/DeviceRepository";
import {IDevice} from "../models/interface/IDevice";
import {IEmployee} from "../models/interface/IEmployee";
import {EmployeeRepository} from "../repository/EmployeeRepository";
import {IDocument} from "../models/interface/IDocument";
import {DocumentRepository} from "../repository/DocumentRepository";
import {TransactionRepository} from "../repository/TransactionRepository";
import {ITransaction} from "../models/interface/ITransaction";


/**
 * @class EventController
 */
class StoreController {

    /**
     * Создать магазин
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

        let stores = req.body;
        let storesLength = stores.length;

        stores.forEach((store, key) => {
            StoreRepository.findOne({uuid: store.uuid}, (err, s: IStore) => {
                if (err) {
                    console.log(err);
                    return res.status(400).json(err).end();
                }
                if (!s) {
                    StoreRepository.create({
                        uuid: store.uuid,
                        name: store.name,
                        address: store.address
                    }).then((store: IStore) => {
                        if (key === (storesLength - 1)) {
                            return res.status(200).end();
                        }
                    }).catch((err) => {
                        console.log(err);
                        return res.status(400).json(err).end();
                    });
                }
                else {
                    s.name = store.name;
                    s.address = store.address;
                    s.save().then(() => {
                        if (key === (storesLength - 1)) {
                            return res.status(200).end();
                        }
                    }).catch((err) => {
                        console.log(err);
                        return res.status(400).json(err).end();
                    });
                }
            });
        });
    }

    /**
     * Создать товары
     *
     * @headers Authorization
     * @query storeUuid
     *
     * @error 400 Ошибка в запросе
     * @error 401 Неверный токен
     * @error 402 Требуется оплата
     * @error 404 Отсутствует указанный ресурс
     * @error 405 Терминал неактивен
     *
     * @return 200 OK
     *
     * @param {e.Request} req
     * @param {e.Response} res
     */
    public static products(req: Request, res: Response) {

        let storeUuid = req.params.storeUuid;

        let products = req.body;
        let productLength = products.length;

        products.forEach((product, key) => {
            product.storeUuid = storeUuid;
            ProductRepository.findOne({uuid: product.uuid}, (err, p: IProduct) => {
                if (err) {
                    console.log(err);
                    return res.status(400).json(err).end();
                }
                if (!p) {
                    ProductRepository.create(product).then(() => {
                        if (key === (productLength - 1)) {
                            return res.status(200).end();
                        }
                    }).catch((err) => {
                        console.log(err);
                        return res.status(400).json(err).end();
                    });
                }
                else {
                    ProductRepository.update({uuid: product.uuid}, product).then(() => {
                        if (key === (productLength - 1)) {
                            return res.status(200).end();
                        }
                    }).catch((err) => {
                        console.log(err);
                        return res.status(400).json(err).end();
                    });
                }
            });
        });
    }

    /**
     * Создать смарт-терминал
     *
     * @headers Authorization
     *
     * @error 400 Ошибка в запросе
     * @error 401 Неверный токен
     * @error 402 Требуется оплата
     * @error 404 Отсутствует указанный ресурс
     * @error 405 Терминал неактивен
     *
     * @return 200 OK
     *
     * @param {e.Request} req
     * @param {e.Response} res
     */
    public static devices(req: Request, res: Response) {

        let devices = req.body;
        let devicesLength = devices.length;

        devices.forEach((device, key) => {
            DeviceRepository.findOne({uuid: device.uuid}, (err, d: IDevice) => {
                if (err) {
                    console.log(err);
                    return res.status(400).json(err).end();
                }
                if (!d) {
                    DeviceRepository.create({
                        uuid: device.uuid,
                        name: device.name,
                        storeUuid: device.storeUuid
                    }).then((device: IDevice) => {
                        if (key === (devicesLength - 1)) {
                            return res.status(200).end();
                        }
                    }).catch((err) => {
                        console.log(err);
                        return res.status(400).json(err).end();
                    });
                }
                else {
                    d.name = device.name;
                    d.storeUuid = device.storeUuid;
                    d.save().then(() => {
                        if (key === (devicesLength - 1)) {
                            return res.status(200).end();
                        }
                    }).catch((err) => {
                        console.log(err);
                        return res.status(400).json(err).end();
                    });
                }
            });
        });
    }

    /**
     * Передать документы
     *
     * @headers Authorization
     * @query storeUuid
     *
     * @error 400 Ошибка в запросе
     * @error 401 Неверный токен
     * @error 402 Требуется оплата
     * @error 404 Отсутствует указанный ресурс
     * @error 405 Терминал неактивен
     *
     * @return 200 OK
     *
     * @param {e.Request} req
     * @param {e.Response} res
     */
    public static documents(req: Request, res: Response) {
        let documents = req.body;
        let documentsLength = documents.length;

        documents.forEach((document, key) => {
            DeviceRepository.findOne({uuid: document.uuid}, (err, d: IDocument) => {
                if (err) {
                    console.log(err);
                    return res.status(400).json(err).end();
                }
                if (!d) {
                    DocumentRepository.create({
                        uuid: document.uuid,
                        openUserUuid: document.openUserUuid ? document.openUserUuid : null,
                        type: document.type,
                        storeUuid: document.storeUuid,
                        deviceUuid: document.deviceUuid ? document.deviceUuid : null,
                        version: document.version ? document.version : null,
                        number: document.number ? document.number : null
                    }).then((doc: IDocument) => {
                        let transactionsLength = document.transactions.length;
                        if (document.transactions && transactionsLength > 0) {
                            document.transactions.forEach((transaction, transactionKey) => {
                                transaction.documentUuid = doc.uuid;
                                TransactionRepository.create(transaction).then((t) => {
                                    if (key === (documentsLength - 1) && transactionKey === (transactionsLength - 1)) {
                                        return res.status(200).end();
                                    }
                                });
                            });
                        }
                        else if (key === (documentsLength - 1)) {
                            return res.status(200).end();
                        }
                    }).catch((err) => {
                        console.log(err);
                        return res.status(400).json(err).end();
                    });
                }
                else {
                    d.openUserUuid = (document.openUserUuid ? document.openUserUuid : null);
                    d.type = document.type;
                    d.storeUuid = (document.storeUuid ? document.storeUuid : null);
                    d.deviceUuid = (document.deviceUuid ? document.deviceUuid : null);
                    d.version = (document.version ? document.version : null);
                    d.number = (document.number ? document.number : null);
                    d.save().then(() => {
                        let transactionsLength = document.transactions.length;
                        if (document.transactions && transactionsLength > 0) {
                            document.transactions.forEach((transaction, transactionKey) => {
                                TransactionRepository.findOne({uuid: transaction.uuid}, (err, trans: ITransaction) => {
                                    if (err) {
                                        console.log(err);
                                        return res.status(400).json(err).end();
                                    }
                                    transaction.documentUuid = d.uuid;
                                    if (!trans) {
                                        TransactionRepository.create(transaction).then((t) => {
                                            if (key === (documentsLength - 1) && transactionKey === (transactionsLength - 1)) {
                                                return res.status(200).end();
                                            }
                                        });
                                    }
                                    else {
                                        TransactionRepository.update({uuid: trans.uuid}, transaction).then(() => {
                                            if (key === (documentsLength - 1) && transactionKey === (transactionsLength - 1)) {
                                                return res.status(200).end();
                                            }
                                        }).catch((err) => {
                                            console.log(err);
                                            return res.status(400).json(err).end();
                                        });
                                    }
                                });
                            });
                        }
                        if (key === (documentsLength - 1)) {
                            return res.status(200).end();
                        }
                    }).catch((err) => {
                        console.log(err);
                        return res.status(400).json(err).end();
                    });
                }
            });
        });
    }

    /**
     * Создать сотрудника
     *
     * @headers Authorization
     *
     * @error 400 Ошибка в запросе
     * @error 401 Неверный токен
     * @error 402 Требуется оплата
     * @error 404 Отсутствует указанный ресурс
     * @error 405 Терминал неактивен
     *
     * @return 200 OK
     *
     * @param {e.Request} req
     * @param {e.Response} res
     */
    public static employees(req: Request, res: Response) {

        let employees = req.body;
        let employeesLength = employees.length;

        employees.forEach((employee, key) => {
            EmployeeRepository.findOne({uuid: employee.uuid}, (err, e: IEmployee) => {
                if (err) {
                    console.log(err);
                    return res.status(400).json(err).end();
                }
                if (!e) {
                    EmployeeRepository.create({
                        uuid: employee.uuid,
                        name: employee.name,
                        lastName: employee.lastName,
                        patronymicName: employee.patronymicName,
                        phone: employee.phone,
                        role: employee.role
                    }).then((employee: IEmployee) => {
                        if (key === (employeesLength - 1)) {
                            return res.status(200).end();
                        }
                    }).catch((err) => {
                        console.log(err);
                        return res.status(400).json(err).end();
                    });
                }
                else {
                    e.name = employee.name;
                    e.uuid = employee.uuid;
                    e.lastName = employee.lastName;
                    e.patronymicName = employee.patronymicName;
                    e.phone = employee.phone;
                    e.role = employee.role;
                    e.save().then(() => {
                        if (key === (employeesLength - 1)) {
                            return res.status(200).end();
                        }
                    }).catch((err) => {
                        console.log(err);
                        return res.status(400).json(err).end();
                    });
                }
            });
        });
    }
}

export {StoreController};