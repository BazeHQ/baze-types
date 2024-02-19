import { Endpoint, HttpMethods } from "../../generic";

export const ResendOtpForPhoneVerificationEndpoint: Endpoint = {
    path: '/otps/phone-verification',
    fullPath: '/communications/otps/phone-verification',
    parentModule: '/communications',
    method: HttpMethods.Patch
}

export const ResendOtpForPasswordResetEndpoint: Endpoint = {
    path: '/otps/password-reset',
    fullPath: '/communications/otps/password-reset',
    parentModule: '/communications',
    method: HttpMethods.Patch
}