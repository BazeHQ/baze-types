import {TransactionStatus} from "../models";

export interface IFetchTransactionPayload {
  customer: string;
  reference: string;
}

export interface IFetchTransactionResponse {
  status: TransactionStatus
}
