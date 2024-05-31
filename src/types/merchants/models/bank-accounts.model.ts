import { ActiveOrInactive, IBase } from "../../generic";

export interface IBankAccount extends IBase {
    codes: {
        paystack: {
            code: string;
            domain: string;
        };
    }
    merchant: string;
    number: string;
    status: ActiveOrInactive;
    metadata?: {
        bankName: string;
        accountName: string;
        thirdParty?: {
            paystackRecepientCode?: string;
        }
    }
}