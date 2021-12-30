export class CreateProviderDto
{
    name: string;
    address: string;
    phone: string;

    constructor(_name: string, _address: string, _phone: string)
    {
        this.name = _name;
        this.address = _address;
        this.phone = _phone;
    }
}