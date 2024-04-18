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

declare enum BazeEventSource {
    cart = "cart",
    merchant = "merchant",
    order = "order",
    customer = "customer",
    system = "system"
}
interface IBazeEvent extends IBase {
    loggedAt: Date;
    description: string;
    source: {
        id?: string;
        option: BazeEventSource;
    };
}

declare enum FeeType {
    fixed = "fixed",
    percentage = "percentage"
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
    hasAttemptedIdentityVerification: boolean;
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
interface IStoreShippingFee extends IBase {
    name: string;
    description: string;
    amount: number;
}
interface IStoreFee extends IBase {
    name: string;
    type: FeeType;
    amount: number;
}
declare enum StoreStatus {
    live = "live",
    maintenance = "maintenance"
}
interface IStore extends IBase {
    merchantId: string;
    name: string;
    isLive: boolean;
    status: StoreStatus;
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
    shippingFees: Array<IStoreShippingFee>;
    fees: Array<IStoreFee>;
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

declare enum CartStatus {
    shopping = "shopping",
    addedCustomer = "added-customer",
    clearedForCheckout = "cleared-for-checkout",
    addedDeliveryDetails = "added-delivery-details",
    initiatedPayment = "initiated-payment",
    abandoned = "abandoned",
    checkedOut = "checked-out"
}
interface IVariantAndOption {
    variant: string;
    option: string;
}
type CartVariantAndOptionMetadata = {
    uuid: string;
    name: string;
    option: {
        uuid: string;
        name: string;
    };
};
type CartProductQuantityAndPrice = {
    qnpConfigId?: string;
    variants?: Array<CartVariantAndOptionMetadata>;
    hasVariants: boolean;
    images: Array<ICloudinaryImage>;
    slug: string;
    qis: number;
    price: number;
};
interface ICartItem extends IBase {
    product: string;
    quantity: number;
    variants?: Array<IVariantAndOption>;
    metadata: {
        snapshots: {
            qnp: CartProductQuantityAndPrice;
        };
    };
}
interface ICart extends IBase {
    store: string;
    customer?: string;
    items: Array<ICartItem>;
    shippingFee?: IStoreShippingFee;
    note?: string;
    deliveryAddress?: string;
    fees?: Array<IStoreFee>;
    status: CartStatus;
    metadata: {
        totalAmount: number;
        errors?: Array<string>;
        events: Array<IBazeEvent>;
        customer?: {
            name: string;
            email: string;
            phoneNumber: string;
        };
    };
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
declare enum CustomerStatus {
    engaged = "engaged",
    dormant = "dormant"
}
declare enum CustomerSource {
    internal = "internal",
    webstoreOrder = "webstore-order",
    webstoreEmailSubscription = "webstore-email-subscription"
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
    metadata?: {
        status?: CustomerStatus;
        source?: CustomerSource;
    };
}

declare enum OrderStatus {
    awaitingPayment = "awaiting-payment",
    pendingDispatch = "pending-dispatch",
    dispatched = "dispatched",
    cancelled = "cancelled",
    cancelledWithRefund = "cancelled-with-refund"
}
declare enum PaymentMethod {
    offlineTransfer = "offline-transfer",
    physicalCash = "physical-cash",
    bazeWebstore = "baze-webstore",
    paymentLink = "payment-link"
}
declare enum SalesChannel {
    baze = "baze",
    whatsapp = "whatsapp",
    instagram = "instagram",
    twitter = "twitter",
    physicalStore = "physical-store",
    phone = "phone",
    other = "other"
}
interface IOrder extends IBase {
    store: string;
    customer: string;
    cart: string;
    status: OrderStatus;
    note?: string;
    channel: {
        option: SalesChannel;
        description?: string;
    };
    metadata: {
        revenue?: string;
        transaction: string;
        events: Array<IBazeEvent>;
    };
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
interface ICreateShippingFeePayload {
    name: string;
    amount: number;
    description: string;
}
interface IEditShippingFeePayload extends Partial<ICreateShippingFeePayload> {
    fee: string;
}
interface ICreateStoreFeePayload {
    name: string;
    type: FeeType;
    amount: number;
}
interface IEditStoreFeePayload extends Partial<ICreateStoreFeePayload> {
    fee: string;
}

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
interface IMailListCustomerPayload {
    name: string;
    email: string;
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

interface IWebstoreProduct extends Omit<IProduct, 'variantConfig'> {
    minPrice: number;
    maxPrice: number;
    variantConfig: {
        quantityAndPrice: Array<IWebstoreProductQuantityConfig>;
        variants: IProductVariant;
    };
}
type IWebstoreProductQuantityOption = IBase & {
    variant: string;
    variantName: string;
    option: string;
    optionName: string;
};
interface IWebstoreProductQuantityConfig extends Partial<IProductQuantityConfig> {
    options: Array<IWebstoreProductQuantityOption>;
}
interface IWebstoreProducts {
    products: Array<IWebstoreProduct>;
    pagination: IPagination;
}
interface IEditCartItemQuantityPayload {
    item: string;
    quantity: number;
}
interface IAddDeliveryToCartPayload {
    address: string;
    shippingFee: string;
    note?: string;
}
interface ICheckoutResponse {
    transaction: {
        reference: string;
        url: string;
        transaction: string;
    };
}
interface IWebstoreCartItem extends IBase {
    product: string;
    quantity: number;
    price: number;
    quantityInStock: number;
    variantOption?: IWebstoreProductQuantityConfig;
    hasErrors: boolean;
    errors: Array<string>;
    metadata?: {
        name?: string;
        isVariantProduct?: boolean;
        productImages?: Array<ICloudinaryImage>;
        productSlug: string;
    };
}
interface IWebstoreCart extends IBase {
    store?: string;
    items: Array<IWebstoreCartItem>;
    customer?: {
        _id: string;
        firstName: string;
        lastName: string;
        email: string;
        phone: string;
        deliveryAddress: string;
        orderNote?: string;
    };
    shippingFee?: IStoreShippingFee;
    fees?: Array<IStoreFee>;
    status: CartStatus;
    hasErrors: boolean;
    errors: Array<string>;
    metadata: {
        totalAmount: number;
        itemTotalWithoutCharges: number;
    };
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

interface IBank {
    code: string;
    name: string;
    slug: string;
}
interface IResolvedBankAccountResponse {
    canBeUsed: boolean;
    nameOnAccount: string;
}
interface IResolveBankAccountPayload {
    bankCode: string;
    accountNumber: string;
}
interface IValidateMerchantDto extends IResolveBankAccountPayload {
    bvn: string;
}

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

declare enum RevenueSource {
    order = "order",
    subscription = "subscription"
}
declare enum Partner {
    paystack = "paystack"
}
interface ThirdPartyFee {
    amount: number;
    partner: {
        name: Partner;
        fee: {
            type: FeeType;
            value: number;
        };
    };
}
interface IRevenue extends IBase {
    source: {
        option: RevenueSource;
        id?: string;
    };
    amount: number;
    outflow: Array<ThirdPartyFee>;
    inflow: number;
}

declare enum TransactionStatus {
    initiated = "initiated",
    abandoned = "abandoned",
    successful = "successful",
    failed = "failed",
    pendingConfirmation = "pending-confirmation"
}
declare enum TransactionChannel {
    online = "online",
    offline = "offline"
}
declare enum PaymentGateway {
    paystack = "paystack"
}
declare enum TransactionEntity {
    customer = "customer",
    merchant = "merchant",
    store = "store",
    baze = "baze"
}
declare enum TransactionSubject {
    order = "order",
    subscription = "subscription"
}
interface ITransaction<T = unknown> extends IBase {
    initiator: {
        entity: TransactionEntity;
        id?: string;
        amountPaid?: number;
    };
    subject: {
        entity: TransactionSubject;
        id?: string;
    };
    amount: number;
    reference: string;
    gateway: PaymentGateway;
    status: TransactionStatus;
    channel: TransactionChannel;
    recipient: {
        entity: TransactionEntity;
        id?: string;
    };
    revenue?: string;
    metadata?: T;
}

interface IFetchTransactionPayload {
    customer: string;
    reference: string;
}
interface IFetchTransactionResponse {
    status: TransactionStatus;
}

export { AddOrRemove, type ApiResponse, type BazeError, BazeEventSource, type BazeSuccessResponse, type CartProductQuantityAndPrice, CartStatus, type CartVariantAndOptionMetadata, ChangeCollectionProductsEndpoint, CreateCollectionEndpoint, CreateProductEndpoint, CreateProductErrors, CreateStoreEndpoint, CreateStoreErrors, CustomerSource, CustomerStatus, DeleteCollectionEndpoint, EditCollectionEndpoint, type Endpoint, FeeType, FetchProfileErrors, ForgotPasswordEndpoint, GetAccessTokenEndpoint, HttpMethods, type IAddCustomerNotePayload, type IAddDeliveryToCartPayload, type IBank, type IBankAccount, type IBase, type IBazeEvent, type ICart, type ICartItem, type IChangeCollectionProductsPayload, type IChangeCollectionsForProductPayload, type ICheckoutResponse, type ICloudinaryImage, type ICollection, type ICollectionResponse, type ICreateCollectionPayload, type ICreateCollectionWithProductsPayload, type ICreateCustomerPayload, type ICreateCustomerResponse, type ICreateProductPayload, type ICreateProductResponse, type ICreateShippingFeePayload, type ICreateStoreFeePayload, type ICreateStorePayload, type ICreateStoreResponse, type ICreateSystemPreferencePayload, type ICustomer, type ICustomerNote, type ICustomerResponse, type IEditCartItemQuantityPayload, type IEditCollectionPayload, type IEditCustomerPayload, type IEditShippingFeePayload, type IEditStoreFeePayload, type IEditSystemPreferencePayload, type IFetchProfileResponse, type IFetchStoreSubdomainSuggestionPayload, type IFetchStoreSubdomainSuggestionRes, type IFetchTransactionPayload, type IFetchTransactionResponse, type IHasQueryPayload, type IJob, type IJobResponse, type IListCollectionsResponse, type IListCustomersResponse, type IListProductsResponse, type IListStoreAttributesResponse, type ILoginPayload, type ILoginResponse, type IMailListCustomerPayload, type IManageCollectionProductsPayload, type IMerchant, type IOrder, type IPagination, type IPassword, type IProduct, type IProductQuantityConfig, type IProductQuantityOption, type IProductVariant, type IProductVariantConfig, type IProductVariantOption, type IPublishStorePayload, type IPublishStoreRes, type IRawStoreConfig, type IRequestPasswordResetPayload, type IReserveEmailPayload, type IReserveEmailResponse, type IResetPasswordPayload, type IResolveBankAccountPayload, type IResolvedBankAccountResponse, type IRevenue, type IStore, type IStoreAttribute, type IStoreAttributeOption, type IStoreConfig, type IStoreFee, type IStoreShippingFee, type ISystemPreference, type ISystemPreferenceResponse, type ITransaction, type IUpdateProductPayload, type IUpdateProductResponse, type IUploadCustomerCsvPayload, type IUploadProductCsvPayload, type IValidateMerchantDto, type IVariantAndOption, type IVerifyOtpPayload, type IVerifyOtpResponse, type IVerifyOtpWithoutAuthPayload, type IViewJobPayload, type IViewOneProductResponse, type IWebStore, type IWebstoreCart, type IWebstoreCartItem, type IWebstoreConfig, type IWebstoreProduct, type IWebstoreProductQuantityConfig, type IWebstoreProductQuantityOption, type IWebstoreProducts, JobClientType, JobStatus, JobTask, ListCollectionsEndpoint, ListProductsForStoreEndpoint, ListStoreAttributesEndpoint, LoginEndpoint, LoginErrors, ManageCollectionEndpoint, MerchantAccountStatus, OrderStatus, OtpContext, OtpVerificationErrors, Partner, PaymentGateway, PaymentMethod, type PhoneOrEmail, ProductStatus, ProfileEndpoint, PublishStoreEndpoint, PublishStoreErrors, ResendOtpForEmailVerificationEndpoint, ResendOtpForPasswordResetEndpoint, ReserveEmailEndpoint, ReserveEmailErrors, ResetPasswordEndpoint, ResetPasswordErrors, RevenueSource, SalesChannel, StoreStatus, SuggestStoreSubdomainsEndpoint, type ThirdPartyFee, TransactionChannel, TransactionEntity, TransactionStatus, TransactionSubject, UpdateProductEndpoint, UpdateProductErrors, UpdateStoreEndpoint, UpdateStoreErrors, type Verification, VerificationProvider, VerificationStatus, VerifyOtpEndpoint, ViewOneCollectionEndpoint, ViewOneProductEndpoint };
