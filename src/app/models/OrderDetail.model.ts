import { Order } from "./order.model";

export class OrderDetail{
    constructor(
    public  id: number,
    public idProduct: number,
    public price: number,
    public quantity: number,
    public order: Order
    ){}
}