import {Express} from "express";
import IndexController from "../controllers/IndexController";

export default class IndexRoute {
    constructor(app: Express) {
        app.route("/").get(IndexController.version);
    }
}