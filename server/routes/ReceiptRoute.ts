import {Express} from "express";
import {Security} from "../config/Security";
import {ReceiptController} from "../controllers/ReceiptController";

/**
 * @class ReceiptRoute
 *
 */
class ReceiptRoute {

    /**
     * @param {e.Express} app
     */
    constructor(app: Express) {

        /**
         * Защищаем запросы к роутам 'receipt'
         * Авторизация запросов облака Эвотор в стороннем сервисе. Содержит токен в зависимости от типа авторизации: Basic или Bearer.
         */
        app.all("/api/v1/receipt", Security.requireUserAuthorization);

        /**
         * Отправить чек (V2)
         * После оплаты отправляет чек в сторонний сервис. Тело запроса содержит один или несколько чеков.
         */
        app.route("/api/v1/receipt").post(ReceiptController.create);

    }
}

export default ReceiptRoute;