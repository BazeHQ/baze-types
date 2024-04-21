import { HttpStatusCode } from "axios";
import { BazeError, Endpoint, HttpMethods } from "../../generic";

export enum OtpContext {
	VerifyPhoneNumber = 'verify-phone-number',
	VerifyEmail = 'verify-email',
	ResetPassword = 'reset-password',
	ChangePassword = 'change-password'
}

export interface IVerifyOtpPayload {
    context: OtpContext;
    token: string;
}

export interface IVerifyOtpWithoutAuthPayload {
	context: OtpContext;
	token: string;
	recipient: string;
}

export interface IVerifyOtpResponse {
    status: boolean;
    token: string;
    refreshToken: string;
}

export const OtpVerificationErrors: {
    invalidOtp: BazeError,
	retriesUsedUp: BazeError,
} = {
	invalidOtp: {
		statusCode: HttpStatusCode.BadRequest,
		code: 'INVALID_OTP',
		message: `This transaction is either invalid or expired`,
		recommendedActions: [
			`Request a new OTP`
		]
	},
	retriesUsedUp: {
		statusCode: HttpStatusCode.TooManyRequests,
		code: 'RETRIES_USED_UP',
		message: `You've tried too many times. Please request a new OTP`,
		recommendedActions: [
			`Request a new OTP`
		]
	}
};

export const VerifyOtpEndpoint: Endpoint = {
	path: '/otps',
	fullPath: '/communications/otps',
	parentModule: '/communications',
	method: HttpMethods.Patch
};