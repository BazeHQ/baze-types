import { ICustomer } from "../models";

export interface IReserveEmailPayload {
    email: string;
    phoneNumber: string;
    password: string;
    fullName: string;
}

export interface IReserveEmailResponse {
    customer: ICustomer;
    token: string;
}