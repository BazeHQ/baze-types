import { IBase } from "../../generic";
import { IBankAccount } from "../../merchants";

export enum SettlementStatus {
    pending = 'pending',
    inProgress = 'in-progress',
    willRetry = 'will-retry',
    retrying = 'retrying',
    settled = 'settled',
    failed = 'failed',
    willNotSettle = 'will-not-settle'
}

export interface IBazeTxFee {
    model?: string;
    amount?: number;
}

export interface ISettlementOrderMeta {
    order: string;
    ref: string;
    meta: {
        customerName: string;
        amount: number;
        bazeTransactionFee?: IBazeTxFee;
        settledAt?: Date;
        orderdAt?: Date;
        due?: Date;
        status?: SettlementStatus;
    }
}

export interface IMerchantSettlement extends IBase {
    merchant: string;
    store: string;
    bankAccount: string;
    status: SettlementStatus;
    orders: Array<ISettlementOrderMeta>;
    thirdPartyRefs?: {
        paystack?: {
            reference?: string;
            transferCode?: string;
        }
    };
    meta: {
        snapshots: {
            bankAccount: IBankAccount
        },
        totalAmount: number;
        bazeTransactionFee?: IBazeTxFee;
    }
}

export interface ISystemSettlement extends IBase {
    settlements: Array<string>;
    analytics: {
        merchants: number;
        stores: number;
        orders: number;
        totalAmount: number;
        bazeTransactionFee: IBazeTxFee;
        completedAt?: Date;
    }
}