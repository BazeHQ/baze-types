import { HttpStatusCode } from 'axios';

interface IBase {
    _id: string;
    _deletedAt: Date;
    createdAt: Date;
    updatedAt: Date;
}

interface BazeError<T = unknown> {
    code?: string;
    statusCode: HttpStatusCode;
    message: string;
    recommendedActions?: Array<string>;
    description?: string;
    data?: T;
}

interface BazeSuccessResponse<T = unknown> {
    statusCode: HttpStatusCode;
    message: string;
    data?: T;
}

interface ApiResponse<T> {
    code: number;
    error?: BazeError;
    message: string;
    data: T;
}

declare enum HttpMethods {
    Post = "POST",
    Put = "PUT",
    Get = "GET",
    Patch = "PATCH"
}
interface Endpoint {
    path: string;
    fullPath?: string;
    parentModule?: string;
    method: HttpMethods;
}

declare enum OtpContext {
    VerifyPhoneNumber = "verify-phone-number",
    ResetPassword = "reset-password"
}
interface IVerifyOtpPayload {
    context: OtpContext;
    token: string;
}
interface IVerifyOtpResponse {
    status: boolean;
    token: string;
    refreshToken: string;
}
declare const OtpVerificationErrors: {
    invalidOtp: BazeError;
    retriesUsedUp: BazeError;
};
declare const VerifyOtpEndpoint: Endpoint;

declare const ResendOtpForPhoneVerificationEndpoint: Endpoint;

interface IPassword extends IBase {
    token: string;
    hint: string;
    isActive: boolean;
}
declare enum CustomerAccountStatus {
    EmailReserved = "email-reserved",
    Inactive = "inactive",
    Deactivated = "deactivated",
    Active = "active"
}
interface ICustomer extends IBase {
    status: CustomerAccountStatus;
    email: string;
    fullName: string;
    phoneNumber: string;
    passwords?: Array<IPassword>;
    phoneVerified: boolean;
}

interface ILoginPayload {
    email: string;
    password: string;
}
interface ILoginResponse {
    token: string;
    refreshToken: string;
}
declare const LoginErrors: {
    invalidEmailOrPassword: BazeError;
    deactivatedAccount: BazeError;
};
declare const LoginEndpoint: Endpoint;

interface IFetchProfileResponse {
    customer: ICustomer;
}
declare const FetchProfileErrors: {
    invalidCustomer: BazeError;
};
declare const ProfileEndpoint: Endpoint;

interface IReserveEmailPayload {
    email: string;
    phoneNumber: string;
    password: string;
    fullName: string;
}
interface IReserveEmailResponse {
    customer: ICustomer;
    token: string;
}
type PhoneOrEmail = 'phone' | 'email';
declare const ReserveEmailErrors: {
    compromisedPassword: (changeDate: Date) => BazeError;
    duplicateCustomerDetected: (d: PhoneOrEmail) => BazeError;
    invalidPhoneNumber: BazeError;
};
declare const ReserveEmailEndpoint: Endpoint;

declare const GetAccessTokenEndpoint: Endpoint;

export { type ApiResponse, type BazeError, type BazeSuccessResponse, CustomerAccountStatus, type Endpoint, FetchProfileErrors, GetAccessTokenEndpoint, HttpMethods, type IBase, type ICustomer, type IFetchProfileResponse, type ILoginPayload, type ILoginResponse, type IPassword, type IReserveEmailPayload, type IReserveEmailResponse, type IVerifyOtpPayload, type IVerifyOtpResponse, LoginEndpoint, LoginErrors, OtpContext, OtpVerificationErrors, type PhoneOrEmail, ProfileEndpoint, ResendOtpForPhoneVerificationEndpoint, ReserveEmailEndpoint, ReserveEmailErrors, VerifyOtpEndpoint };
