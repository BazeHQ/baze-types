import { HttpStatusCode } from 'axios';

interface IBase {
    _id?: string;
    _deletedAt?: Date;
    createdAt?: Date;
    updatedAt?: Date;
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

interface IHasQueryPayload {
    id: string;
}

declare enum OtpContext {
    VerifyPhoneNumber = "verify-phone-number",
    VerifyEmail = "verify-email",
    ResetPassword = "reset-password"
}
interface IVerifyOtpPayload {
    context: OtpContext;
    token: string;
}
interface IVerifyOtpWithoutAuthPayload {
    context: OtpContext;
    token: string;
    recipient: string;
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

declare const ResendOtpForEmailVerificationEndpoint: Endpoint;
declare const ResendOtpForPasswordResetEndpoint: Endpoint;

interface IPassword extends IBase {
    token: string;
    hint: string;
    isActive: boolean;
}
declare enum MerchantAccountStatus {
    EmailReserved = "email-reserved",
    Inactive = "inactive",
    Deactivated = "deactivated",
    Active = "active"
}
interface IMerchant extends IBase {
    status: MerchantAccountStatus;
    email: string;
    fullName: string;
    phoneNumber: string;
    passwords?: Array<IPassword>;
    phoneVerified: boolean;
    emailVerified: boolean;
    hasCreatedStore: boolean;
    lastOtpVerification: {
        context: OtpContext;
        time: Date;
    };
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
    merchantId: string;
    name: string;
    isLive: boolean;
    contactEmails: Array<string>;
    logo: ICloudinaryImage;
    heroBg: ICloudinaryImage;
    allowsMessaging: boolean;
    heroSectionText: string;
    contactNumbers: Array<string>;
    subdomains: [
        {
            name: string;
            isActive: boolean;
        }
    ];
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

declare enum ProductStatus {
    published = "published",
    drafted = "drafted",
    shelved = "shelved"
}
type IProductQuantityOption = IBase & {
    variant: string;
    option: string;
};
type IProductVariantOption = IBase & {
    name: string;
    uuid: string;
};
interface IProductQuantityConfig extends IBase {
    options: Array<IProductQuantityOption>;
    quantity: number;
    price: number;
    uuid: string;
}
interface IProductVariantConfig extends IBase {
    uuid: string;
    name: string;
    options: Array<IProductVariantOption>;
}
interface IProductVariant extends IBase {
    hasDifferentPrices: boolean;
    config: Array<IProductVariantConfig>;
}
interface IProduct extends IBase {
    store: string;
    name: string;
    price: number;
    status: ProductStatus;
    images: Array<ICloudinaryImage>;
    quantity: number;
    description: string;
    variantConfig: {
        quantityAndPrice: Array<IProductQuantityConfig>;
        variants: IProductVariant;
    };
}

interface ICart {
    store: string;
    merchant: string;
    customer: string;
}

interface ITransaction {
    store: string;
    merchant: string;
    cart: string;
}

interface ICollection extends IBase {
    store: string | IStore;
    name: string;
    products: Array<string> | Array<IProduct>;
}

interface ICustomerNote extends IBase {
    note: string;
    creator: string;
}
interface ICustomer extends IBase {
    store: string;
    name: string;
    phoneNumber: string;
    email: string;
    address: {
        state: string;
        address: string;
    };
    notes: Array<ICustomerNote>;
}

type IRawStoreConfig = Omit<IStoreConfig, "createdAt" | "_id" | "updatedAt" | "_deletedAt">;
interface ICreateStorePayload {
    name: string;
    email: string;
    contactNumber: string;
    logo: ICloudinaryImage;
    heroBg: ICloudinaryImage;
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

interface IListStoreAttributesResponse {
    attributes: Array<IStoreAttribute & {
        options: Array<IStoreAttributeOption>;
    }>;
}
declare const ListStoreAttributesEndpoint: Endpoint;

declare const CreateProductErrors: {
    noSuchStoreForMerchant: BazeError;
};
declare const UpdateProductErrors: {
    noSuchStoreForMerchant: BazeError;
    noSuchProductInStore: BazeError;
};
interface ICreateProductPayload {
    store: string;
    name: string;
    price: number;
    status: ProductStatus;
    images?: Array<ICloudinaryImage>;
    quantity: number;
    description: string;
    variantConfig?: {
        quantityAndPrice: Array<IProductQuantityConfig>;
        variants: IProductVariant;
    };
}
interface ICreateProductResponse {
    product: IProduct;
}
interface IListProductsResponse {
    products: Array<IProduct>;
}
interface IUpdateProductPayload extends Partial<ICreateProductPayload> {
}
interface IUpdateProductResponse extends ICreateProductResponse {
}
interface IViewOneProductResponse extends ICreateProductResponse {
}
declare const CreateProductEndpoint: Endpoint;
declare const ListProductsForStoreEndpoint: Endpoint;
declare const ViewOneProductEndpoint: Endpoint;
declare const UpdateProductEndpoint: Endpoint;

declare const UpdateStoreErrors: {
    noSuchStore: BazeError;
    noSuchAttribute: BazeError;
    attributeHasNoSuchOption: (attrName: string) => BazeError;
};
declare const UpdateStoreEndpoint: Endpoint;

interface IPublishStorePayload {
    subdomain: string;
}
interface IFetchStoreSubdomainSuggestionPayload {
    store: string;
}
interface IFetchStoreSubdomainSuggestionRes {
    suggestedSubdomain: string;
}
interface IPublishStoreRes {
    store: IStore;
}
declare const PublishStoreErrors: {
    usedSubdomain: BazeError;
    storeAlreadyPublished: BazeError;
};
declare const PublishStoreEndpoint: Endpoint;
declare const SuggestStoreSubdomainsEndpoint: Endpoint;

declare enum AddOrRemove {
    add = "add",
    remove = "remove"
}
interface ICreateCollectionPayload {
    name: string;
}
interface ICreateCollectionWithProducts {
    name: string;
    products: Array<string>;
}
interface IEditCollectionPayload {
    name: string;
}
interface IManageCollectionProductsPayload {
    action: AddOrRemove;
    products: Array<string>;
}
interface IChangeCollectionProductsPayload {
    products: Array<string>;
}
interface ICollectionResponse {
    collection: ICollection;
}
interface IListCollectionsResponse {
    collections: Array<ICollection>;
}
declare const CreateCollectionEndpoint: Endpoint;
declare const EditCollectionEndpoint: Endpoint;
declare const ListCollectionsEndpoint: Endpoint;
declare const ViewOneCollectionEndpoint: Endpoint;
declare const DeleteCollectionEndpoint: Endpoint;
declare const ManageCollectionEndpoint: Endpoint;
declare const ChangeCollectionProductsEndpoint: Endpoint;

interface ICreateCustomerPayload {
    name: string;
    phoneNumber: string;
    email: string;
    address?: {
        state: string;
        address: string;
    };
}
interface IAddCustomerNotePayload {
    note: string;
}
type IEditCustomerPayload = Partial<ICreateCustomerPayload>;
interface IListCustomersResponse {
    customers: Array<ICustomer>;
}
interface ICustomerResponse {
    customer: ICustomer;
}
interface ICreateCustomerResponse {
    customer: ICustomer;
}

interface IFetchProfileResponse {
    merchant: IMerchant;
    stores: Array<IStore>;
}
declare const FetchProfileErrors: {
    invalidMerchant: BazeError;
};
declare const ProfileEndpoint: Endpoint;

interface IReserveEmailPayload {
    email: string;
    phoneNumber: string;
    password: string;
    fullName: string;
}
interface IReserveEmailResponse {
    merchant: IMerchant;
    token: string;
}
type PhoneOrEmail = 'phone' | 'email';
declare const ReserveEmailErrors: {
    compromisedPassword: (changeDate: Date) => BazeError;
    duplicateMerchantDetected: (d: PhoneOrEmail) => BazeError;
    invalidPhoneNumber: BazeError;
    couldNotSendOtp: BazeError;
};
declare const ReserveEmailEndpoint: Endpoint;

declare const GetAccessTokenEndpoint: Endpoint;

interface IRequestPasswordResetPayload {
    email: string;
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

export { AddOrRemove, type ApiResponse, type BazeError, type BazeSuccessResponse, ChangeCollectionProductsEndpoint, CreateCollectionEndpoint, CreateProductEndpoint, CreateProductErrors, CreateStoreEndpoint, CreateStoreErrors, DeleteCollectionEndpoint, EditCollectionEndpoint, type Endpoint, FetchProfileErrors, ForgotPasswordEndpoint, GetAccessTokenEndpoint, HttpMethods, type IAddCustomerNotePayload, type IBase, type ICart, type IChangeCollectionProductsPayload, type ICloudinaryImage, type ICollection, type ICollectionResponse, type ICreateCollectionPayload, type ICreateCollectionWithProducts, type ICreateCustomerPayload, type ICreateCustomerResponse, type ICreateProductPayload, type ICreateProductResponse, type ICreateStorePayload, type ICreateStoreResponse, type ICustomer, type ICustomerNote, type ICustomerResponse, type IEditCollectionPayload, type IEditCustomerPayload, type IFetchProfileResponse, type IFetchStoreSubdomainSuggestionPayload, type IFetchStoreSubdomainSuggestionRes, type IHasQueryPayload, type IListCollectionsResponse, type IListCustomersResponse, type IListProductsResponse, type IListStoreAttributesResponse, type ILoginPayload, type ILoginResponse, type IManageCollectionProductsPayload, type IMerchant, type IPassword, type IProduct, type IProductQuantityConfig, type IProductQuantityOption, type IProductVariant, type IProductVariantConfig, type IProductVariantOption, type IPublishStorePayload, type IPublishStoreRes, type IRawStoreConfig, type IRequestPasswordResetPayload, type IReserveEmailPayload, type IReserveEmailResponse, type IResetPasswordPayload, type IStore, type IStoreAttribute, type IStoreAttributeOption, type IStoreConfig, type ITransaction, type IUpdateProductPayload, type IUpdateProductResponse, type IVerifyOtpPayload, type IVerifyOtpResponse, type IVerifyOtpWithoutAuthPayload, type IViewOneProductResponse, ListCollectionsEndpoint, ListProductsForStoreEndpoint, ListStoreAttributesEndpoint, LoginEndpoint, LoginErrors, ManageCollectionEndpoint, MerchantAccountStatus, OtpContext, OtpVerificationErrors, type PhoneOrEmail, ProductStatus, ProfileEndpoint, PublishStoreEndpoint, PublishStoreErrors, ResendOtpForEmailVerificationEndpoint, ResendOtpForPasswordResetEndpoint, ReserveEmailEndpoint, ReserveEmailErrors, ResetPasswordEndpoint, ResetPasswordErrors, SuggestStoreSubdomainsEndpoint, UpdateProductEndpoint, UpdateProductErrors, UpdateStoreEndpoint, UpdateStoreErrors, VerifyOtpEndpoint, ViewOneCollectionEndpoint, ViewOneProductEndpoint };
