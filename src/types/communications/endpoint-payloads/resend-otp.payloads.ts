import { Endpoint, HttpMethods } from "../../generic";

export const ResendOtpForEmailVerificationEndpoint: Endpoint = {
	path: '/otps/email-verification',
	fullPath: '/communications/otps/email-verification',
	parentModule: '/communications',
	method: HttpMethods.Patch
};

export const ResendOtpForPasswordResetEndpoint: Endpoint = {
	path: '/otps/password-reset',
	fullPath: '/communications/otps/password-reset',
	parentModule: '/communications',
	method: HttpMethods.Patch
};
