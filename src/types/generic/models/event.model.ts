import { IBase } from "./base.model";

export enum BazeEventSource {
    cart = 'cart',
    merchant = 'merchant',
    order = 'order',
    customer = 'customer',
    system = 'system'
}

export interface IBazeEvent extends IBase {
    loggedAt: Date;
    description: string;
    source: {
        id?: string;
        option: BazeEventSource
    }
}