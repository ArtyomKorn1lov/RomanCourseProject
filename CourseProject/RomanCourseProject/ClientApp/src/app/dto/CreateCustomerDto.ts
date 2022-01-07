export class CreateCustomerDto
{
    name: string;
    address: string;
    phone: string;
    contacts: string;

    constructor(_name: string, _address: string, _phone: string, _contacts: string)
    {
        this.name = _name;
        this.address = _address;
        this.phone = _phone;
        this.contacts = _contacts;
    }
}