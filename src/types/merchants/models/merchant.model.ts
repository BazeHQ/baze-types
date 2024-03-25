import { IBase } from "../../generic";
import {OtpContext} from "../../communications";

export interface IPassword extends IBase {
    token: string;
	hint: string;
	isActive: boolean
}

export enum MerchantAccountStatus {
    EmailReserved = 'email-reserved',
    Inactive = 'inactive',
    Deactivated = 'deactivated',
    Active = 'active'
}

export interface IMerchant extends IBase {
	status: MerchantAccountStatus;
    email: string;
    fullName: string;
    phoneNumber: string;
    passwords?: Array<IPassword>;
	phoneVerified: boolean;
  emailVerified: boolean;
  hasCreatedStore: boolean;
  lastOtpVerification: {
    context: OtpContext;
    time: Date;
  }
}
