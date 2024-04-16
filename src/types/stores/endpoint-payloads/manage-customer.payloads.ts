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

export interface IMailListCustomerPayload {
  name: string;
  email: string;
}

export interface IUploadCustomerCsvPayload {
    url: string;
}

export interface IAddCustomerNotePayload {
    note: string;
}

export type IEditCustomerPayload = Partial<ICreateCustomerPayload>;

export interface IListCustomersResponse {
    customers: Array<ICustomer>
}

export interface ICustomerResponse {
    customer: ICustomer
}

export interface ICreateCustomerResponse {
    customer: ICustomer;
}
