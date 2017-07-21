import {Express} from "express";
import {UserController} from "../controllers/UserController";
import {Security} from "../config/Security";

/**
 * @class UserRoute
 *
 */
class UserRoute {

    /**
     * @param {e.Express} app
     */
    constructor(app: Express) {

        /**
         * Защищаем запросы к роутам 'user'
         * Авторизация запросов облака Эвотор в стороннем сервисе. Содержит токен в зависимости от типа авторизации: Basic или Bearer.
         */
        app.all("/api/v1/user/*", Security.requireAuthorization);

        /**
         * Авторизация существующего пользователя в стороннем сервисе с помощью данных учётной записи платформы Эвотор.
         */
        app.route("/api/v1/user/verify").post(UserController.verify);

        /**
         * Передаёт токен приложения, после того, как пользователь установил приложение в Личном кабинете.
         * Сторонний сервис использует токен приложения для авторизации запросов к облаку Эвотор.
         */
        app.route("/api/v1/user/token").post(UserController.token);

        /**
         * Регистрирует новую учётную запись в стороннем сервисе.
         * ВАЖНО: Под пользователем понимается мастер-аккаунт владельца бизнеса в системе партнера.
         */
        app.route("/api/v1/user/create").post(UserController.create);

    }
}

export default UserRoute;