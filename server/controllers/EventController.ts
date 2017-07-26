import {Request, Response} from 'express';

/**
 * @class EventController
 */
class EventController {

    /**
     * События биллинга
     *
     * @headers Authorization
     *
     * @error 401 Неверный токен облака Эвотор
     *
     * @return 200 OK
     *
     * @param {e.Request} req
     * @param {e.Response} res
     */
    public static create(req: Request, res: Response) {


    }
}

export {EventController};