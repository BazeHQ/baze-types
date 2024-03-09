import { HttpStatusCode } from 'axios';

interface IBase {
    _id: string;
    _deletedAt: Date;
    createdAt: Date;
    updatedAt: Date;
}

interface ICloudinaryImage {
    assetId: string;
    publicId: string;
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
    Patch = "PATCH",
    Delete = "DELETE"
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
interface IVerifyOtpWithoutAuthPayload {
    context: OtpContext;
    token: string;
    phoneNumber: string;
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
declare const ResendOtpForPasswordResetEndpoint: Endpoint;

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
    hasCreatedStore: boolean;
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
    couldNotSendOtp: BazeError;
};
declare const ReserveEmailEndpoint: Endpoint;

declare const GetAccessTokenEndpoint: Endpoint;

interface IRequestPasswordResetPayload {
    phoneNumber: string;
}
interface IResetPasswordPayload {
    password: string;
    confirmPassword: string;
}
declare const ResetPasswordErrors: {
    confirmPasswordMismatch: BazeError;
    lateResetRequest: BazeError;
};
declare const ResetPasswordEndpoint: Endpoint;
declare const ForgotPasswordEndpoint: Endpoint;

interface IStoreAttribute extends IBase {
    name: string;
    slug: string;
    isMandatoryForActivation: boolean;
    isActive: boolean;
}
interface IStoreAttributeOption extends IBase {
    attribute: string;
    slug: string;
    value: string;
    isActive: boolean;
}
interface IStoreConfig extends IBase {
    attribute: string;
    options?: Array<string>;
    rawChoices?: Array<unknown>;
}
interface IStore extends IBase {
    customerId: string;
    name: string;
    isLive: boolean;
    contactEmails: Array<string>;
    logo: ICloudinaryImage;
    heroBg: ICloudinaryImage;
    allowsMessaging: boolean;
    heroSectionText: string;
    contactNumbers: Array<string>;
    policies: Array<{
        name: string;
        content: string;
    }>;
    addresses: Array<{
        name: string;
        location: unknown;
    }>;
    config: Array<IStoreConfig>;
}

interface IProduct extends IBase {
    store: string;
}

interface IListStoreAttributesResponse {
    attributes: Array<IStoreAttribute & {
        options: Array<IStoreAttributeOption>;
    }>;
}
declare const ListStoreAttributesEndpoint: Endpoint;

type IRawStoreConfig = Omit<IStoreConfig, "createdAt" | "_id" | "updatedAt" | "_deletedAt">;
interface ICreateStorePayload {
    name: string;
    email: string;
    contactNumber: string;
    logo: string;
    heroBg: string;
    allowsMessaging: boolean;
    heroSectionText: string;
    shippingAndRefundPolicy: string;
    address: string;
    config: Array<IRawStoreConfig>;
}
interface ICreateStoreResponse {
    store: IStore;
}
declare const CreateStoreErrors: {
    noSuchAttribute: BazeError;
    attributeHasNoSuchOption: (attrName: string) => BazeError;
    requiredAttributeNotProvided: BazeError;
};
declare const CreateStoreEndpoint: Endpoint;

declare const CreateProductErrors: {
    default: BazeError;
};
interface ICreateProductPayload {
    store: string;
}
interface ICreateProductResponse {
    product: IProduct;
}
declare const createProductEndpoint: Endpoint;

export { type ApiResponse, type BazeError, type BazeSuccessResponse, CreateProductErrors, CreateStoreEndpoint, CreateStoreErrors, CustomerAccountStatus, type Endpoint, FetchProfileErrors, ForgotPasswordEndpoint, GetAccessTokenEndpoint, HttpMethods, type IBase, type ICloudinaryImage, type ICreateProductPayload, type ICreateProductResponse, type ICreateStorePayload, type ICreateStoreResponse, type ICustomer, type IFetchProfileResponse, type IListStoreAttributesResponse, type ILoginPayload, type ILoginResponse, type IPassword, type IProduct, type IRawStoreConfig, type IRequestPasswordResetPayload, type IReserveEmailPayload, type IReserveEmailResponse, type IResetPasswordPayload, type IStore, type IStoreAttribute, type IStoreAttributeOption, type IStoreConfig, type IVerifyOtpPayload, type IVerifyOtpResponse, type IVerifyOtpWithoutAuthPayload, ListStoreAttributesEndpoint, LoginEndpoint, LoginErrors, OtpContext, OtpVerificationErrors, type PhoneOrEmail, ProfileEndpoint, ResendOtpForPasswordResetEndpoint, ResendOtpForPhoneVerificationEndpoint, ReserveEmailEndpoint, ReserveEmailErrors, ResetPasswordEndpoint, ResetPasswordErrors, VerifyOtpEndpoint, createProductEndpoint };
