import {Request, Response} from 'express';
import {EventRepository} from "../repository/EventRepository";

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

        let event = req.body;

        EventRepository.create(event).then(() => {
            return res.status(200).end();
        }).catch((err) => {
            console.log(err);
            return res.status(400).json(err).end();
        });

    }
}

export {EventController};