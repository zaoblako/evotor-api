import {Express} from "express";
import {Security} from "../config/Security";
import {StoreController} from "../controllers/StoreController";

/**
 * @class EventRoute
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
        app.all("/api/v1/inventories/*", Security.requireUserAuthorization);

        /**
         * Создать / отредактировать однин или несколько магазинов в стороннем сервисе.
         * Облако эвотор передаёт в сторонний сервис все изменения, сделанные в Личном кабинете. Эвотор является мастер-системой по данной сущности.
         */
        app.route("/api/v1/inventories/stores").put(StoreController.create);

        /**
         * Создать товары
         * Загружает в сторонний сервис массив новых товаров, созданных на терминале.
         */
        app.route("/api/v1/inventories/stores/:storeUuid/products").post(StoreController.products);

        /**
         * Передать документы
         * Передаёт в сторонний сервис массив документов с транзакциями.
         */
        app.route("/api/v1/inventories/stores/:storeUuid/documents").put(StoreController.documents);

        /**
         * Создать смарт-терминал
         * Создать / отредактировать один или несколько смарт-терминалов в стороннем сервисе.
         * Облако эвотор передаёт в сторонний сервис все изменения, сделанные в Личном кабинете.
         * Эвотор является мастер-системой по данной сущности.
         */
        app.route("/api/v1/inventories/devices").put(StoreController.devices);

        /**
         * Создать сотрудника
         * Создать / отредактировать одного или нескольких сотрудников в стороннем сервисе.
         * Облако эвотор передаёт в сторонний сервис все изменения, сделанные в Личном кабинете.
         * Эвотор является мастер-системой по данной сущности.
         */
        app.route("/api/v1/inventories/employees").put(StoreController.employees);

    }
}

export default StoreRoute;