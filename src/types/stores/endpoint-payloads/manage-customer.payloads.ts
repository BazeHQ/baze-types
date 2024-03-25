import { ICustomer } from "../models";

export interface ICreateCustomerPayload {
    name: string;
    phoneNumber: string;
    email: string;
    address?: {
        state: string;
        address: string;
    };
}

export type IEditCustomerPayload = Partial<ICreateCustomerPayload>

export interface ICreateCustomerResponse {
    customer: ICustomer;
}
