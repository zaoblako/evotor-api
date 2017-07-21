import * as http from "http";
import config from "./config/Config";
import {ExpressConfig} from "./config/Express";

const app = new ExpressConfig().config();

const server: http.Server = http.createServer(app);

server.listen(config.port);

server.on("error", (e: Error) => {
    console.log("Error starting server" + e);
});

server.on("listening", () => {
    console.log("[HTTP] Server started on port " + config.port);
});