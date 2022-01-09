export interface OrdersDtoInfo
{
    id: number;
    customerId: number;
    productId: number;
    customerName: string;
    productName: string;
    count: number;
    date: Date;
    deliveryId: number;
    price: number;
}