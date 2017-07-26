import {Request, Response} from 'express';
import {StoreRepository} from "../repository/StoreRepository";
import {IStore} from "../models/interface/IStore";

/**
 * @class StoreController
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

        StoreRepository.findOne({_id: req.body.uuid}, (err, store: IStore) => {
            if (err) {
                return console.log(err);
            }
            if (!store) {
                StoreRepository.create({
                    _id: req.body.uuid,
                    name: req.body.name,
                    address: req.body.address
                }).then((store: IStore) => {
                    return res.status(200).end();
                }).catch((err) => {
                    console.log(err);
                    return res.json({}).end();
                });
            }
            else {
                store.name = req.body.name;
                store.address = req.body.address;
                store.save().then(() => {
                    return res.status(200).end();
                }).catch((err) => {
                    console.log(err);
                    return res.json({}).end();
                });
            }
        });
    }
}

export {StoreController};