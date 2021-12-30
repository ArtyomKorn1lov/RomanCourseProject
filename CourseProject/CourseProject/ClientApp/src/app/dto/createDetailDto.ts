export class CreateDetailDto {
    name: string;
    articleNumber: number;
    price: number;
    note?: string;

    constructor(_name: string, _articleNumber: number, _price: number, _note: string )
    {
        this.name = _name;
        this.articleNumber = _articleNumber;
        this.price = _price;
        this.note = _note;
    }
}