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

interface IPagination {
    page: {
        hasNext: boolean;
        hasPrevious: boolean;
        current: number;
        next: number;
        previous: number;
        total: number;
        firstRecordIndex: number;
    };
    size: number;
    total: number;
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

declare enum VerificationProvider {
    identityPass = "identity-pass"
}
declare enum VerificationStatus {
    passed = "passed",
    failed = "failed"
}
interface Verification extends IBase {
    status: VerificationStatus;
    description?: string;
    metadata: unknown;
}
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
    identityVerified: boolean;
    hasCreatedStore: boolean;
    hasAddedBankAccount: boolean;
    thirdPartyIds: {
        paystackCustomerCode: string;
    };
    lastOtpVerification: {
        context: OtpContext;
        time: Date;
    };
    verificationAttempts: Array<Verification>;
    bankAccounts: Array<string>;
}

interface IBankAccount extends IBase {
    codes: {
        paystack: string;
    };
    merchant: string;
    number: string;
    metadata?: {
        bankName: string;
        accountName: string;
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
interface IWebstoreConfig extends IBase {
    attribute: IStoreAttribute;
    options?: Array<IStoreAttributeOption>;
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
interface IWebStore extends Omit<IStore, 'config'> {
    config: Array<IWebstoreConfig>;
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
    slug: string;
    name: string;
    price: number;
    copiesSold: number;
    status: ProductStatus;
    images: Array<ICloudinaryImage>;
    collections: Array<string>;
    quantity: number;
    description: string;
    variantConfig: {
        quantityAndPrice: Array<IProductQuantityConfig>;
        variants: IProductVariant;
    };
}

interface ICartItem extends IBase {
    product: string;
    quantity: number;
    variantOption?: IProductQuantityConfig;
    metadata?: {
        name?: string;
        isVariantProduct?: boolean;
        price?: string;
        productImages?: ICloudinaryImage;
    };
}
interface ICart extends IBase {
    store?: string;
    customer?: string;
    items: Array<ICartItem>;
}

interface ITransaction {
    store: string;
    merchant: string;
    cart: string;
}

interface ICollection extends IBase {
    store: string | IStore;
    name: string;
    slug: string;
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
    otherContacts?: Array<string>;
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
    collections: Array<ICollection>;
}
interface IChangeCollectionsForProductPayload {
    collections: Array<string>;
}
interface IUploadProductCsvPayload {
    url: string;
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
interface ICreateCollectionWithProductsPayload {
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
interface IUploadCustomerCsvPayload {
    url: string;
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

interface IWebstoreProduct extends IProduct {
    minPrice: number;
    maxPrice: number;
}
interface IWebstoreProducts {
    products: Array<IWebstoreProduct>;
    pagination: IPagination;
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

interface ISystemPreference<T> extends IBase {
    name: string;
    slug: string;
    value: T;
}

declare enum JobStatus {
    initiated = "initiated",
    pending = "pending",
    completed = "completed",
    failed = "failed"
}
declare enum JobTask {
    bulkCustomerUpload = "bulk-customer-upload",
    bulkProductUpload = "bulk-product-upload"
}
declare enum JobClientType {
    merchant = "merchant",
    customer = "customer",
    store = "store",
    admin = "admin",
    system = "system"
}
interface IJob<T = unknown> extends IBase {
    status: JobStatus;
    client: {
        type: JobClientType;
        id?: string;
    };
    reports: Array<string>;
    description: string;
    task: JobTask;
    metadata: T;
}

interface ICreateSystemPreferencePayload<T> {
    name: string;
    slug: string;
    value: T;
}
type IEditSystemPreferencePayload<T> = Partial<ICreateSystemPreferencePayload<T>>;
interface ISystemPreferenceResponse<T> {
    preference: ISystemPreference<T>;
}

interface IViewJobPayload {
    jobId: string;
}
interface IJobResponse {
    job: IJob;
}

export { AddOrRemove, type ApiResponse, type BazeError, type BazeSuccessResponse, ChangeCollectionProductsEndpoint, CreateCollectionEndpoint, CreateProductEndpoint, CreateProductErrors, CreateStoreEndpoint, CreateStoreErrors, DeleteCollectionEndpoint, EditCollectionEndpoint, type Endpoint, FetchProfileErrors, ForgotPasswordEndpoint, GetAccessTokenEndpoint, HttpMethods, type IAddCustomerNotePayload, type IBankAccount, type IBase, type ICart, type ICartItem, type IChangeCollectionProductsPayload, type IChangeCollectionsForProductPayload, type ICloudinaryImage, type ICollection, type ICollectionResponse, type ICreateCollectionPayload, type ICreateCollectionWithProductsPayload, type ICreateCustomerPayload, type ICreateCustomerResponse, type ICreateProductPayload, type ICreateProductResponse, type ICreateStorePayload, type ICreateStoreResponse, type ICreateSystemPreferencePayload, type ICustomer, type ICustomerNote, type ICustomerResponse, type IEditCollectionPayload, type IEditCustomerPayload, type IEditSystemPreferencePayload, type IFetchProfileResponse, type IFetchStoreSubdomainSuggestionPayload, type IFetchStoreSubdomainSuggestionRes, type IHasQueryPayload, type IJob, type IJobResponse, type IListCollectionsResponse, type IListCustomersResponse, type IListProductsResponse, type IListStoreAttributesResponse, type ILoginPayload, type ILoginResponse, type IManageCollectionProductsPayload, type IMerchant, type IPagination, type IPassword, type IProduct, type IProductQuantityConfig, type IProductQuantityOption, type IProductVariant, type IProductVariantConfig, type IProductVariantOption, type IPublishStorePayload, type IPublishStoreRes, type IRawStoreConfig, type IRequestPasswordResetPayload, type IReserveEmailPayload, type IReserveEmailResponse, type IResetPasswordPayload, type IStore, type IStoreAttribute, type IStoreAttributeOption, type IStoreConfig, type ISystemPreference, type ISystemPreferenceResponse, type ITransaction, type IUpdateProductPayload, type IUpdateProductResponse, type IUploadCustomerCsvPayload, type IUploadProductCsvPayload, type IVerifyOtpPayload, type IVerifyOtpResponse, type IVerifyOtpWithoutAuthPayload, type IViewJobPayload, type IViewOneProductResponse, type IWebStore, type IWebstoreConfig, type IWebstoreProduct, type IWebstoreProducts, JobClientType, JobStatus, JobTask, ListCollectionsEndpoint, ListProductsForStoreEndpoint, ListStoreAttributesEndpoint, LoginEndpoint, LoginErrors, ManageCollectionEndpoint, MerchantAccountStatus, OtpContext, OtpVerificationErrors, type PhoneOrEmail, ProductStatus, ProfileEndpoint, PublishStoreEndpoint, PublishStoreErrors, ResendOtpForEmailVerificationEndpoint, ResendOtpForPasswordResetEndpoint, ReserveEmailEndpoint, ReserveEmailErrors, ResetPasswordEndpoint, ResetPasswordErrors, SuggestStoreSubdomainsEndpoint, UpdateProductEndpoint, UpdateProductErrors, UpdateStoreEndpoint, UpdateStoreErrors, type Verification, VerificationProvider, VerificationStatus, VerifyOtpEndpoint, ViewOneCollectionEndpoint, ViewOneProductEndpoint };
