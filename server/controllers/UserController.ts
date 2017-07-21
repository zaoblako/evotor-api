import {Request, Response} from 'express';
import {UserRepository} from "../repository/UserRepository";
import {IUser} from "../models/IUser";
import * as uuid from "uuid/v4";

/**
 * @class UserController
 */
class UserController {

    /**
     * Авторизация пользователя
     *
     * @headers Authorization
     *
     * @error 400 Ошибка в запросе
     * @error 401 Неверный токен облака Эвотор
     * @error 404 Отсутствует указанный ресурс
     * @error 409 Ассоциация невозможна
     *
     * @return userUuid:string, hasBilling:boolean, token:string
     *
     * @param {e.Request} req
     * @param {e.Response} res
     */
    public static verify(req: Request, res: Response) {
        UserRepository.findOne({_id: req.body.userUuid, username: req.body.username, plain: req.body.password}, (err: Error, user: IUser) => {
            if (err) {
                return res.json(err);
            }
            else if (!user) {
                return res.status(404).end();
            }
            else {
                user.accessToken = uuid();
                user.save().then((user) => {
                    return res.json({
                        userUuid: user.id,
                        hasBilling: false,
                        token: user.accessToken
                    });
                }).catch((err) => {
                    return res.send(err);
                });
            }
        });
    }

    /**
     * Передача токена приложения
     *
     * @headers Authorization
     *
     * @error 400 Ошибка в запросе
     * @error 401 Неверный токен облака Эвотор
     * @error 404 Отсутствует указанный ресурс
     *
     * @return 200 OK
     *
     * @param {e.Request} req
     * @param {e.Response} res
     */
    public static token(req: Request, res: Response) {
        UserRepository.findOne({_id: req.body.userUuid}, (err: Error, user: IUser) => {
            if (err) {
                return res.json({
                    "errors": [
                        {
                            "code": 2002,
                            "reason": "unexpected",
                            "subject": "database"
                        }]
                });
            }
            else if (!user) {
                return res.status(404).end();
            }
            else {
                user.token = req.body.token;
                user.save().then((user) => {

                    return res.status(200).end();

                }).catch((err) => {

                    return res.send({
                        "errors": [
                            {
                                "code": 2002,
                                "reason": "unexpected",
                                "subject": "database"
                            }]
                    });
                });
            }
        });
    }

    /**
     * Регистрация учётной записи
     *
     * @headers Authorization
     *
     * @error 400 Ошибка в запросе
     * @error 401 Неверный токен облака Эвотор
     * @error 404 Отсутствует указанный ресурс
     * @error 409 Регистрация невозможна
     *
     * @return userUuid:string, token:string
     *
     * @param {e.Request} req
     * @param {e.Response} res
     */
    public static create(req: Request, res: Response) {

        let user = {
            _id: req.body.userUuid,
            accessToken: uuid(),
            hasBilling: false
        };

        UserRepository.create(user).then((created) => {
            return res.json({
                userUuid: user._id,
                token: user.accessToken
            });
        }).catch((err) => {

            if (err.code == 11000) {
                return res.status(409).json({
                    "errors": [
                        {
                            "code": 2005
                        }
                    ]
                });
            }
            return res.json(err);
        });
    }
}

export {UserController};