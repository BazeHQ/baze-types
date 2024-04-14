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

export interface ITransaction<T = unknown> extends IBase {
    initiator: {
        entity: TransactionEntity;
        id?: string;
    }
    amount: number;
    reference: string;
    gateway: PaymentGateway;
    status: TransactionStatus;
    channel: TransactionChannel;
    recipient: {
        entity: TransactionEntity;
        id?: string;
    };
    revenue?:string;
    metadata?: T
}