import {Express} from "express";
import {IndexController} from "../controllers/IndexController";

/**
 * @class IndexRoute
 */
class IndexRoute {

    /**
     * @param {e.Express} app
     */
    constructor(app: Express) {

        /**
         * Роут информации об API
         * @return {Version}
         */
        app.route("/").get(IndexController.version);
    }

}

export default IndexRoute;