import {Express} from "express";
import {Security} from "../config/Security";
import {StoreController} from "../controllers/StoreController";

/**
 * @class StoreRoute
 *
 */
class StoreRoute {

    /**
     * @param {e.Express} app
     */
    constructor(app: Express) {

        /**
         * Защищаем запросы к роутам 'store'
         * Авторизация запросов облака Эвотор в стороннем сервисе. Содержит токен в зависимости от типа авторизации: Basic или Bearer.
         */
        app.all("/api/v1/inventories/*", Security.requireAuthorization);

        /**
         * Создать / отредактировать однин или несколько магазинов в стороннем сервисе.
         * Облако эвотор передаёт в сторонний сервис все изменения, сделанные в Личном кабинете. Эвотор является мастер-системой по данной сущности.
         */
        app.route("/api/v1/inventories/stores").put(StoreController.create);


    }
}

export default StoreRoute;