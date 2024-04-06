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
  jobId: string;
  provider: VerificationProvider,
  status: VerificationStatus
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
  lastOtpVerification: {
    context: OtpContext;
    time: Date;
  },
  verificationAttempts: Array<Verification>;
}
