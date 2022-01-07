export interface Orders
{
    id: number;
    customerId: number;
    productId: number;
    count: number;
    date: Date;
    deliveryId: number;
    price: number;
}