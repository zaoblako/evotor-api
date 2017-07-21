class Config {
    static DB_CONNECTION_STRING: string = "mongodb://localhost:27017/evotor"
}

Object.seal(Config);
export {Config};