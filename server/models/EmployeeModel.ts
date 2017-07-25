import { IEmployee } from './IEmployee';

class EmployeeModel {

    private _employeeModel: IEmployee;

    constructor(employeeModel: IEmployee) {
        this._employeeModel = employeeModel;
    }

    get name(): string {
        return this._employeeModel.name;
    }

    get lastName(): string {
        return this._employeeModel.lastName;
    }

    get uuid(): string {
        return this._employeeModel.uuid;
    }

    get patronymicName(): string {
        return this._employeeModel.patronymicName;
    }

    get phone(): string {
        return this._employeeModel.phone;
    }

    get role(): string {
        return this._employeeModel.role;
    }

}

Object.seal(EmployeeModel);
export { EmployeeModel };