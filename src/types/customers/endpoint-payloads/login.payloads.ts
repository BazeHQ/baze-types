import { HttpStatusCode } from "axios";
import { BazeError, Endpoint, HttpMethods } from "../../generic";

export interface ILoginPayload {
    email: string;
    password: string;
}

export interface ILoginResponse {
    token: string;
    refreshToken: string;
}

export const LoginErrors: {
    invalidEmailOrPassword: BazeError;
    deactivatedAccount: BazeError;
} = {
	invalidEmailOrPassword: {
		statusCode: HttpStatusCode.Unauthorized,
        code: 'INVALID_EMAIL_OR_PASSWORD',
		message: `The email or password you provided is invalid`,
		recommendedActions: [
			`Ensure that all your credentials are correct.`,
			`If you're sure that they're correct then you should probably use the "Forgot Password" toolkit`
		]
	},
	deactivatedAccount: {
		statusCode: HttpStatusCode.Unauthorized,
        code: 'DEACTIVATED_ACCOUNT',
		message: `Your account has been deactivated`,
		recommendedActions: [
			`Reach out to support to find out why it was deactivated`
		]
	}
};

export const LoginEndpoint: Endpoint = {
    path: '/auth',
    fullPath: '/customers/auth',
    parentModule: '/customers',
    method: HttpMethods.Patch
}