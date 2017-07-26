import {Request, Response} from 'express';

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


    }
}

export {ReceiptController};