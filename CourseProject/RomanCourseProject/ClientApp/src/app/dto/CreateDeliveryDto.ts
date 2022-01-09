export class CreateDeliveryDto {
    deliveryMethod: string;
    price: number;
    date: Date;
    
    constructor(_deliveryMethod: string, _price: number, _date: Date) {
        this.deliveryMethod = _deliveryMethod;
        this.price = _price;
        this.date = _date;
    }
}