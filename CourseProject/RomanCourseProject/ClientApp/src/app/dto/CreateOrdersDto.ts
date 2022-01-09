export class CreateOrdersDto
{
    customerId: number;
    productId: number;
    count: number;
    date: Date;
    deliveryId: number;
    price: number;

    constructor(_customerId: number, _productId: number, _count: number, _date: Date, _deliveryId: number, _price: number)
    {
        this.customerId = _customerId;
        this.productId = _productId;
        this.count = _count;
        this.date = _date;
        this.deliveryId = _deliveryId;
        this.price = _price;
    }
}