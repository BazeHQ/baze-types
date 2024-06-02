import { IBase } from "../../generic";

export enum TransactionStatus {
    initiated = 'initiated',
    abandoned = 'abandoned',
    successful = 'successful',
    failed = 'failed',
    pendingConfirmation = 'pending-confirmation'
}

export enum TransactionChannel {
    online = 'online',
    offline = 'offline',
}

export enum PaymentGateway {
    paystack = 'paystack'
}

export enum TransactionEntity {
    customer = 'customer',
    merchant = 'merchant',
    store = 'store',
    baze = 'baze',
}

export enum TransactionSubject {
    order = 'order',
    subscription = 'subscription',
    settlement = 'settlement'
}

export enum TransactionType {
    webstoreSale = 'webstore-sale',
    paymentLinkConsumation = 'payment-link-consumation',
    settlement = 'settlement'
}

export interface ITransaction<T = unknown> extends IBase {
    initiator: {
        entity: TransactionEntity;
        id?: string;
        amountPaid?: number;
    }
    subject: {
        entity: TransactionSubject;
        id?: string;
    }
    amount: number;
    reference: string;
    transferCode?: string;
    gateway: PaymentGateway;
    status: TransactionStatus;
    channel: TransactionChannel;
    recipient: {
        entity: TransactionEntity;
        id?: string;
    };
    type: TransactionType;
    revenue?:string;
    metadata?: T
}