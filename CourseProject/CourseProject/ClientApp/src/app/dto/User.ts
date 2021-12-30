export class User {
    id: number;
    name: string;
    login: string;
    password: string;
    status: string;

    public constructor(_id: number, _name: string, _login: string, _password: string, _status: string ){
        this.id = _id;
        this.name = _name;
        this.login = _login;
        this.password = _password;
        this.status = _status;
    }
}