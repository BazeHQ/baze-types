import { ISettlementOrderMeta } from "../../transactions";

export interface IPendingSettlementRes {
  amount: number;
  orders: Array<ISettlementOrderMeta>
} 

