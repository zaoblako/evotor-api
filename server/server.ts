import * as http from "http";
import Config from "./config/Config";
import {ExpressConfig} from "./config/Express";
import * as winston from 'winston';

const app = new ExpressConfig().config();

const server: http.Server = http.createServer(app);

server.listen(Config.port, "0.0.0.0");

let logger = winston.loggers.get('default');

server.on("error", (e: Error) => {
    logger.error("Error starting server" + e);
});

server.on("listening", () => {
    logger.info("[HTTP] Server started on port " + Config.port);
});