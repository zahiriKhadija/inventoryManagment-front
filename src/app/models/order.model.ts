import { OrderDetail } from "./OrderDetail.model";
import { OrderStatus } from "./OrderStatus.enum";

export class Order{
    constructor(
        public idOrder: number,
        public label: string,
        public idUser: number,
        public username: string,
        public createDate: Date,
        public status: OrderStatus,
        public total: number,
        public mobile: string,
        public adresse: string,
        public ville: string,
        public codePostal: string,
        public orderDetails : OrderDetail []  = []
        ){}
}

