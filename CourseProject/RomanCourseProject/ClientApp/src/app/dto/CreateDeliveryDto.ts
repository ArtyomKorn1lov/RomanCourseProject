export class CreateDeliveryDto
{
    providerId: number;
    detailId: number;
    count: number;
    date: Date;
    price: number;

    constructor(_providerId: number, _detailId: number, _count: number, _date: Date, _price: number)
    {
        this.providerId = _providerId;
        this.detailId = _detailId;
        this.count = _count;
        this.date = _date;
        this.price = _price;
    }
}