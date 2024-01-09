export enum OtpContext {
	VerifyPhoneNumber = 'verify-phone-number'
}

export interface IVerifyOtpPayload {
    context: OtpContext;
    token: string;
}

export interface IVerifyOtpResponse {
    status: boolean;
    token?: string;
}