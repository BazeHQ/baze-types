import { IMerchantSettlement, ISettlementOrderMeta } from "../../transactions";

export interface IPendingSettlementRes {
  amount: number;
  orders: Array<ISettlementOrderMeta>
} 

export interface IFilterSettlementsPayload {
  id: string;
}

export interface IFetchSettlementsRes {
  total: number
	settlements: Array<IMerchantSettlement>
}
