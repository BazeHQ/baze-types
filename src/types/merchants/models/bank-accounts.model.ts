import { ActiveOrInactive, IBase } from "../../generic";

export interface IBankAccount extends IBase {
    codes: {
        paystack: string;
    }
    merchant: string;
    number: string;
    status: ActiveOrInactive;
    metadata?: {
        bankName: string;
        accountName: string;
        thirdParty?: {
            paystack?: {
                recipientCode: string;
                domain: string;
            }
        }
    }
}