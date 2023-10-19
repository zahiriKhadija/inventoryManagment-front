import { OrderDetail } from "./OrderDetail.model";

export class Order{
    constructor(
        public idOrder: number,
        public label: string,
        public idUser: number,
        public username: string,
        public createDate: Date,
        public status: boolean,
        public total: number,
        public orderDetails : OrderDetail []  = []
        ){}
}

