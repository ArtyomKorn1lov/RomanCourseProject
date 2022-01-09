export class CreateProductDto {
    name: string;
    price: number;
    note?: string;

    constructor(_name: string, _price: number, _note: string )
    {
        this.name = _name;
        this.price = _price;
        this.note = _note;
    }
}