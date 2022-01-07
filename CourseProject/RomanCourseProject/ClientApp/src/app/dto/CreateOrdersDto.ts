export class CreateOrdersDto
{
    providerId: number;
    detailId: number;
    count: number;
    date: Date;
    deliveryId: number;
    price: number;

    constructor(_providerId: number, _detailId: number, _count: number, _date: Date, _deliveryId: number, _price: number)
    {
        this.providerId = _providerId;
        this.detailId = _detailId;
        this.count = _count;
        this.date = _date;
        this.deliveryId = _deliveryId;
        this.price = _price;
    }
}