import { HttpStatusCode } from "axios";
import { BazeError, Endpoint, HttpMethods } from "../../generic";

export interface IResetPasswordPayload {
    password: string;
    confirmPassword: string;
}

export const ResetPasswordErrors: {
    confirmPasswordMismatch: BazeError;
    lateResetRequest: BazeError;
} = {
    confirmPasswordMismatch: {
        statusCode: HttpStatusCode.BadRequest,
        code: 'CONFIRM_PASSWORD_MISMATCH',
        message: `Your password and confirm password don't match`,
        recommendedActions: [
            `Ensure both passwords you're providing match`
        ]
    },
    lateResetRequest: {
        statusCode: HttpStatusCode.ExpectationFailed,
        code: 'LATE_RESET_REQUEST',
        message: `We couldn't find an otp verification to verify your password reset`,
        recommendedActions: [
            `Restart the process`,
            `Make sure you reset your password within 5 minutes of verifying the otp you're sent`
        ]
    }
}

export const ResetPasswordEndpoint: Endpoint = {
    path: '/auth/passwords',
    fullPath: '/customers/auth/passwords',
    parentModule: '/customers',
    method: HttpMethods.Patch
}