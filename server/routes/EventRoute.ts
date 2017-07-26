import {Express} from "express";
import {Security} from "../config/Security";
import {EventController} from "../controllers/EventController";

/**
 * @class EventRoute
 *
 */
class EventRoute {

    /**
     * @param {e.Express} app
     */
    constructor(app: Express) {

        /**
         * Защищаем запросы к роутам 'event'
         * Авторизация запросов облака Эвотор в стороннем сервисе. Содержит токен в зависимости от типа авторизации: Basic или Bearer.
         */
        app.all("/api/v1/subscription/event", Security.requireAuthorization);

        /**
         * События биллинга
         * Связанные с биллингом события, которые облако Эвотор передаёт в сторонний сервис.
         * Облако выполняет попытки передать события в течение трёх суток, до тех пор пока не будет получен ответ об успешной доставке сообщения (200ОК).
         * Интервал повторной отправки события около одной минуты.
         */
        app.route("/api/v1/subscription/event").post(EventController.create);

    }
}

export default EventRoute;