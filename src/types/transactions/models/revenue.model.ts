import { FeeType, IBase } from "../../generic";

export enum RevenueSource {
    order = 'order',
    subscription = 'subscription'
}

export enum Partner {
    paystack = 'paystack'
}

export interface ThirdPartyFee {
    amount: number;
    partner: { 
        name: Partner;
        fee: {
            type: FeeType;
            value: number;
        }
    };
}

export interface IRevenue extends IBase {
    source: {
        option: RevenueSource;
        id?: string;
    };
    amount: number;
    outflow: Array<ThirdPartyFee>;
    inflow: number;
}