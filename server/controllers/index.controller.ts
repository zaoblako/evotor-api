import { Request, Response } from 'express';
import UserRepository = require("../repository/UserRepositroy");

export default class IndexController {
    public static read(req: Request, res: Response): void {
        UserRepository.create({email: "asd@asd.com"}).then((user) => {
            console.log(user);
        }).catch((err) => {
            console.log(err);
        });
        try {
            UserRepository.find((error, result) => {
                if (error) res.send({"error": "error"});
                else res.send(result);
            });
        }
        catch (e) {
            console.log(e);
            res.send({"error": "error in your request"});
        }
    }
}