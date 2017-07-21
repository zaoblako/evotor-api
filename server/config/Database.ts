class Constants {
    static DB_CONNECTION_STRING: string = process.env.NODE_ENV === 'production' ? process.env.URI : "mongodb://localhost:27017/evotor"
}

Object.seal(Constants);
export = Constants;