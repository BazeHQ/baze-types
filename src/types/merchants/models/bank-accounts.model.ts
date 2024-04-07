import { IBase } from "../../generic";

export interface IBankAccount extends IBase {
    codes: {
        paystack: string;
    }
    customer: string;
    number: string;
    metadata?: {
        bankName: string;
        accountName: string;
    }
}