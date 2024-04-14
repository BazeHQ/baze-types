import { IBase, IBazeEvent } from "../../generic";

export enum OrderStatus {
    awaitingPayment = 'awaiting-payment',
    pendingDispatch = 'pending-dispatch',
    dispatched = 'dispatched',
    cancelled = 'cancelled',
    cancelledWithRefund = 'cancelled-with-refund'
}

export enum PaymentMethod {
    offlineTransfer = 'offline-transfer',
    physicalCash = 'physical-cash',
    bazeWebstore = 'baze-webstore',
    paymentLink = 'payment-link'
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
    cart: string;
    status: OrderStatus;
    note?: string;
    channel: {
        option: SalesChannel;
        description?: string;
    };
    metadata: {
        revenue?: string;
        transaction: string;
        events: Array<IBazeEvent>;
    }
}