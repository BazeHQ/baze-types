import { IMerchantSettlement } from "../../transactions";
import { ICart, IOrder } from "../models";

export interface IPendingSettlementRes {
  total: number;
  orders: Array<IOrder & { cart: ICart }>
} 

export interface IFilterSettlementsPayload {
  id: string;
}

export interface IFetchSettlementsRes {
  total: number
	settlements: Array<IMerchantSettlement>
}
