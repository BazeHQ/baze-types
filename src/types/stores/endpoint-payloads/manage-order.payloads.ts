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

export interface IMerchantCreateOrderProductPayload {
  id: string;
  quantity: number;
  qnpId?: string;
}

export interface IMerchantCreateOrderPayload {
  customer: string;
  deliveryAddress?: string;
  note?: string;
  salesChannel: SalesChannel;
  paymentMethod: PaymentMethod;
  cart: Array<IMerchantCreateOrderProductPayload>;
  otherFees: Array<string>;
  shipping: string;
}

export interface IUpdateOrderStatusPayload {
  status: OrderStatus;
  note?: string;
}
