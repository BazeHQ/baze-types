import { IBase } from "../../generic";
import {OtpContext} from "../../communications";

export enum VerificationProvider {
  identityPass = 'identity-pass'
}

export enum VerificationStatus {
  passed = 'passed',
  failed = 'failed'
}

export type Verification = {
  status: VerificationStatus;
  description?: string;
  metadata: unknown;
}

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
  identityVerified: boolean;
  hasCreatedStore: boolean;
  hasAddedBankAccount: boolean;
  thirdPartyIds: {
    paystackCustomerCode: string;
  }
  lastOtpVerification: {
    context: OtpContext;
    time: Date;
  },
  verificationAttempts: Array<Verification>;
  bankAccounts: Array<string>
}
