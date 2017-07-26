class Config {
    static DB_CONNECTION_STRING: string = process.env.DB ? process.env.DB : "mongodb://localhost:27017/evotor"
}

Object.seal(Config);
export {Config};