import {ApplicationRepository} from "../repository/ApplicationRepository";
import {IApplication} from "../models/IApplication";

/**
 * @class Security
 */
export class Security {

    /**
     * Мидлвара для авторизации запросов от облака Эвотор
     *
     * @param req
     * @param res
     * @param next
     */
    public static requireAuthorization(req, res, next) {
        let bearer = req.headers['authorization'];

        if (!bearer) {
            return res.status(401).json({
                "errors": [
                    {
                        "code": 1001
                    }
                ]
            });
        }
        else {
            Security.checkBearerToken(bearer, (application: IApplication) => {
                if (application) {
                    return next();
                }
                else {
                    return res.status(401).json({
                        "errors": [
                            {
                                "code": 1001
                            }
                        ]
                    });
                }
            });
        }
    }

    /**
     * Проверка токэна в базе
     *
     * @param {string} token
     * @param {Function} cb
     * @return callback({Application|null})
     */
    protected static checkBearerToken(token: string, cb: Function) {
        token = token.replace("Bearer ", "");
        ApplicationRepository.findOne({token: token}, (err: any, Application: IApplication) => {
            if (err) {
                return console.log(err);
            }
            return cb(Application);
        });
    }
}