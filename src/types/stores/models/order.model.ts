import { IBase, IBazeEvent } from "../../generic";
import { SettlementStatus } from "../../transactions";
import { ICart } from "./cart.model";

export enum OrderStatus {
    awaitingPayment = 'awaiting-payment',
    pendingDispatch = 'pending-dispatch',
    dispatched = 'dispatched',
    cancelled = 'cancelled',
    cancelledWithRefund = 'cancelled-with-refund',
    fulfilled = "fulfilled"
}

export enum PaymentStatus {
    paid = 'paid',
    notPaid = 'not-paid'
}

export enum PaymentMethod {
    offlineTransfer = 'offline-transfer',
    physicalCash = 'physical-cash',
    bazeWebstore = 'baze-webstore',
    paymentLink = 'payment-link'
}

export enum OrderSource {
    customer = 'customer',
    merchant = 'merchant'
}

export enum SalesChannel {
    baze = 'baze',
    whatsapp = 'whatsapp',
    instagram = 'instagram',
    twitter = 'twitter',
    physicalStore = 'physical-store',
    phone = 'phone',
    other = 'other'
}

export interface IOrder extends IBase {
    store: string;
    customer: string;
    cart: ICart | string;
    status: OrderStatus;
    ref: string;
    settlementStatus: SettlementStatus;
    paymentStatus: PaymentStatus;
    paymentMethod: PaymentMethod;
    source: OrderSource;
    note?: string;
    channel: {
        option: SalesChannel;
        description?: string;
    };
    metadata: {
        revenue?: string;
        transaction: string;
        events: Array<IBazeEvent>;
        snapshots?: {
            dates?: Array<{
                status: OrderStatus,
                time: Date;
            }>
        }
    }
}


export interface IListOrdersResponse {
    orders: Array<IOrder>;
    records: number;
}

