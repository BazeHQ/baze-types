import {OrderStatus, PaymentMethod, SalesChannel} from "../models";

export interface IFilterOrders {
  date: {
    start: Date;
    end: Date;
  };
  status: Array<OrderStatus>;
  salesChannel: Array<SalesChannel>;
  shipping: Array<string>;
  paymentMethod: Array<PaymentMethod>;
}
