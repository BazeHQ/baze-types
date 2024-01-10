import { HttpStatusCode } from 'axios';

declare enum OtpContext {
    VerifyPhoneNumber = "verify-phone-number"
}
interface IVerifyOtpPayload {
    context: OtpContext;
    token: string;
}
interface IVerifyOtpResponse {
    status: boolean;
    token?: string;
}

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
declare enum TokenActions {
    ReserveEmail = "reserve-email",
    PlatformAccess = "platform-access"
}
declare const TokenExpiry: {
    [key in TokenActions]: string;
};

interface ILoginPayload {
    email: string;
    passPhrase: string;
}
interface ILoginResponse {
    token: string;
}

interface IFetchProfileResponse {
    customer: ICustomer;
}

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

export { type ApiResponse, type BazeError, type BazeSuccessResponse, CustomerAccountStatus, type IBase, type ICustomer, type IFetchProfileResponse, type ILoginPayload, type ILoginResponse, type IPassword, type IReserveEmailPayload, type IReserveEmailResponse, type IVerifyOtpPayload, type IVerifyOtpResponse, OtpContext, TokenActions, TokenExpiry };
