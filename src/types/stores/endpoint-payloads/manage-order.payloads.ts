import { SettlementStatus } from "../../transactions";
import {OrderStatus, PaymentMethod, SalesChannel} from "../models";

export interface IFilterOrders {
  date?: {
    start?: Date;
    end?: Date;
  };
  status?: Array<OrderStatus>;
  salesChannel?: Array<SalesChannel>;
  settlementStatus?: Array<SettlementStatus>;
  shipping?: Array<string>;
  paymentMethod?: Array<PaymentMethod>;
  customer?: string;
  ref?: string;
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
  otherFees?: Array<string>;
  shipping?: string;
}

export interface IMerchantUpdateOrderPayload {
  order: string;
  customer: string;
  deliveryAddress?: string;
  note?: string;
  salesChannel: SalesChannel;
  paymentMethod: PaymentMethod;
  cart: Array<IMerchantCreateOrderProductPayload>;
  otherFees?: Array<string>;
  shipping?: string;
}

export interface IUpdateOrderStatusPayload {
  order: string;
  status: OrderStatus;
  note?: string;
}
