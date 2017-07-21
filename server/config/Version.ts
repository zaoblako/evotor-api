interface IVersion {
    started: Date;
    uptime: number;
    version: string;
    update: Date;
    updatedBy: string
}

class Version implements IVersion {
    public started: Date;
    public uptime: number;
    public version: string;
    public update: Date;
    public updatedBy: string;

    constructor(started, uptime, version, update, updatedBy) {
        this.started = started;
        this.uptime = uptime;
        this.version = version;
        this.update = update;
        this.updatedBy = updatedBy;
    }
}

export {IVersion, Version}