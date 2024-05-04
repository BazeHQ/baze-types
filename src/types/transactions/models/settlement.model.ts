import { IBase } from "../../generic";
import { IBankAccount } from "../../merchants";

export enum SettlementStatus {
    pending = 'pending',
    inProgress = 'in-progress',
    willRetry = 'will-retry',
    retrying = 'retrying',
    settled = 'settled',
    failed = 'failed'
}

export interface ISettlementOrderMeta {
    order: string;
    meta: {
        customerName: string;
        amount: number;
        due?: Date;
        status?: SettlementStatus
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
        bazeTransactionFee?: {
            model?: string;
            amount?: number;
        };
    }
}

export interface ISystemSettlement extends IBase {
    settlements: Array<string>;
    analytics: {
        merchants: number;
        stores: number;
        orders: number;
        totalAmount: number;
        bazeTransactionFee: {
            model?: string;
            amount: number;
        };
        completedAt?: Date;
    }
}