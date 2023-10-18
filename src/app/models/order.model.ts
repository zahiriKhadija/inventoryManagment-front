import { OrderDetail } from "./OrderDetail.model";

export class Order{
    constructor(
    idOrder: number,
    idUser: number,
    createDate: Date,
    status: boolean,
    orderDetails : OrderDetail []  = []
    ){}
}

