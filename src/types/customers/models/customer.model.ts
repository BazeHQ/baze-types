import { IBase } from "../../generic";

export interface IPassword extends IBase {
    token: string;
	hint: string;
	isActive: boolean
}

export enum CustomerAccountStatus {
    EmailReserved = 'email-reserved',
    Inactive = 'inactive',
    Deactivated = 'deactivated',
    Active = 'active'
}

export interface ICustomer extends IBase {
	status: CustomerAccountStatus;
    email: string;
    fullName: string;
    phoneNumber: string;
    passwords?: Array<IPassword>;
	phoneVerified: boolean;
    hasCreatedStore: boolean;
}