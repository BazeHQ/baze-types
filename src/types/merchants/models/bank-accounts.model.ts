import { IBase } from "../../generic";

export interface IBankAccount extends IBase {
    codes: {
        paystack: string;
    }
    merchant: string;
    number: string;
    metadata?: {
        bankName: string;
        accountName: string;
    }
}