import { IBase } from "../../generic";
import {OtpContext} from "../../communications";

export enum VerificationProvider {
  identityPass = 'identity-pass'
}

export enum VerificationStatus {
  passed = 'passed',
  failed = 'failed'
}

export interface Verification extends IBase {
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
  hasAttemptedIdentityVerification: boolean;
  hasPendingIdentityVerification: boolean;
  hasAddedBankAccount: boolean;
  thirdPartyIds: {
    paystackCustomerCode: string;
    sendgrid?: string;
  }
  lastOtpVerification: {
    context: OtpContext;
    time: Date;
  },
  verificationAttempts: Array<Verification>;
  bankAccounts: Array<string>;
  deletion: {
    reasons: Array<string>;
    otherFeedback: string;
  }
  canUseBusinessAccount?: boolean;
  metadata?: {
    identityDoc?: string;
    cacRegistrationCertificate?: string;
    cacConfirmationScreenshot?: string;
    confirmedBusinessName?: string;
    validatedBy?: string;
  }
}
