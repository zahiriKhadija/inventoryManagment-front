import { Order } from "./order.model";

export class OrderDetail{
    constructor(
    id: number,
    idProduct: number,
    price: number,
    quantity: number,
    order: Order
    ){}
}