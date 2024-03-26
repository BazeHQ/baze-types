import { IBase } from "../../generic";

export interface ICustomerNote extends IBase {
    note: string;
    creator: string;
}

export interface ICustomer extends IBase {
    store: string;
    name: string;
    phoneNumber: string;
    email: string;
    address: {
        state: string;
        address: string;
    };
    notes: Array<ICustomerNote>;
}