import { HttpStatusCode } from "axios";
import { BazeError, Endpoint, HttpMethods } from "../../generic";
import { IMerchant } from "../models";

export interface IReserveEmailPayload {
    email: string;
    phoneNumber: string;
    password: string;
    fullName: string;
}

export interface IReserveEmailResponse {
    merchant: IMerchant;
    token: string;
}

export type PhoneOrEmail = 'phone' | 'email';

export const ReserveEmailErrors: {
    compromisedPassword: ( changeDate: Date ) => BazeError;
    duplicateMerchantDetected: ( d: PhoneOrEmail ) => BazeError;
    invalidPhoneNumber: BazeError;
	couldNotSendOtp: BazeError;
} = {
	invalidPhoneNumber: {
		statusCode: HttpStatusCode.BadRequest,
        code: 'INVALID_PHONE_NUMBER',
		message: `Your phone number isn't quite what we're expecting`,
		recommendedActions: [
			`Ensure you're providing a proper mobile number`
		]
	},
	duplicateMerchantDetected: ( d: PhoneOrEmail ) => {
		return {
			statusCode: HttpStatusCode.BadRequest,
            code: 'DUPLICATE_MERCHANT_DETECTED',
			message: `The ${d} you provided is already taken please provide another one or retrieve your account`,
			recommendedActions: [
				`Confirm that your ${d} is correct`,
				`If you're sure it's correct then that probably means you already have an account. Try using the account recovery tool`,
				`Provide entirely different details`
			]
		};
	},
	compromisedPassword( changeDate: Date ) {
		return {
			statusCode: HttpStatusCode.BadRequest,
            code: 'COMPROMISED_PASSWORD',
			message: `This password is compromised. It was changed on ${changeDate.toDateString()}`,
			recommendedActions: [
				`Try using a totally different password`
			],
			description: `This happens when a admin tries to use a password they already changed for some reason in the past`
		};
	},
	couldNotSendOtp: {
		statusCode: HttpStatusCode.FailedDependency,
		code: 'COULD_NOT_SEND_OTP_TO_RESERVE_EMAIL',
		message: `Your account was created but we couldn't send you an OTP`,
		recommendedActions: [
			`Login and try again in a few minutes`
		]
	}
};

export const ReserveEmailEndpoint: Endpoint = {
    path: '',
    fullPath: '/merchants',
    parentModule: '/merchants',
    method: HttpMethods.Post
}