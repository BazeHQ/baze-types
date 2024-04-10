var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));

// src/types/communications/endpoint-payloads/verify-otp.payloads.ts
import { HttpStatusCode } from "axios";

// src/types/generic/models/event.model.ts
var BazeEventSource = /* @__PURE__ */ ((BazeEventSource2) => {
  BazeEventSource2["cart"] = "cart";
  BazeEventSource2["merchant"] = "merchant";
  BazeEventSource2["order"] = "order";
  BazeEventSource2["customer"] = "customer";
  BazeEventSource2["system"] = "system";
  return BazeEventSource2;
})(BazeEventSource || {});

// src/types/generic/models/fee.enum.ts
var FeeType = /* @__PURE__ */ ((FeeType2) => {
  FeeType2["fixed"] = "fixed";
  FeeType2["percentage"] = "percentage";
  return FeeType2;
})(FeeType || {});

// src/types/generic/endpoints/endpoint.interface.ts
var HttpMethods = /* @__PURE__ */ ((HttpMethods2) => {
  HttpMethods2["Post"] = "POST";
  HttpMethods2["Put"] = "PUT";
  HttpMethods2["Get"] = "GET";
  HttpMethods2["Patch"] = "PATCH";
  HttpMethods2["Delete"] = "DELETE";
  return HttpMethods2;
})(HttpMethods || {});

// src/types/communications/endpoint-payloads/verify-otp.payloads.ts
var OtpContext = /* @__PURE__ */ ((OtpContext2) => {
  OtpContext2["VerifyPhoneNumber"] = "verify-phone-number";
  OtpContext2["VerifyEmail"] = "verify-email";
  OtpContext2["ResetPassword"] = "reset-password";
  return OtpContext2;
})(OtpContext || {});
var OtpVerificationErrors = {
  invalidOtp: {
    statusCode: HttpStatusCode.BadRequest,
    code: "INVALID_OTP",
    message: `This transaction is either invalid or expired`,
    recommendedActions: [
      `Request a new OTP`
    ]
  },
  retriesUsedUp: {
    statusCode: HttpStatusCode.TooManyRequests,
    code: "RETRIES_USED_UP",
    message: `You've tried too many times. Please request a new OTP`,
    recommendedActions: [
      `Request a new OTP`
    ]
  }
};
var VerifyOtpEndpoint = {
  path: "/otps",
  fullPath: "/communications/otps",
  parentModule: "/communications",
  method: "PATCH" /* Patch */
};

// src/types/communications/endpoint-payloads/resend-otp.payloads.ts
var ResendOtpForEmailVerificationEndpoint = {
  path: "/otps/email-verification",
  fullPath: "/communications/otps/email-verification",
  parentModule: "/communications",
  method: "PATCH" /* Patch */
};
var ResendOtpForPasswordResetEndpoint = {
  path: "/otps/password-reset",
  fullPath: "/communications/otps/password-reset",
  parentModule: "/communications",
  method: "PATCH" /* Patch */
};

// src/types/merchants/models/merchant.model.ts
var VerificationProvider = /* @__PURE__ */ ((VerificationProvider2) => {
  VerificationProvider2["identityPass"] = "identity-pass";
  return VerificationProvider2;
})(VerificationProvider || {});
var VerificationStatus = /* @__PURE__ */ ((VerificationStatus2) => {
  VerificationStatus2["passed"] = "passed";
  VerificationStatus2["failed"] = "failed";
  return VerificationStatus2;
})(VerificationStatus || {});
var MerchantAccountStatus = /* @__PURE__ */ ((MerchantAccountStatus2) => {
  MerchantAccountStatus2["EmailReserved"] = "email-reserved";
  MerchantAccountStatus2["Inactive"] = "inactive";
  MerchantAccountStatus2["Deactivated"] = "deactivated";
  MerchantAccountStatus2["Active"] = "active";
  return MerchantAccountStatus2;
})(MerchantAccountStatus || {});

// src/types/merchants/endpoint-payloads/login.payloads.ts
import { HttpStatusCode as HttpStatusCode2 } from "axios";
var LoginErrors = {
  invalidEmailOrPassword: {
    statusCode: HttpStatusCode2.Unauthorized,
    code: "INVALID_EMAIL_OR_PASSWORD",
    message: `The email or password you provided is invalid`,
    recommendedActions: [
      `Ensure that all your credentials are correct.`,
      `If you're sure that they're correct then you should probably use the "Forgot Password" toolkit`
    ]
  },
  deactivatedAccount: {
    statusCode: HttpStatusCode2.Unauthorized,
    code: "DEACTIVATED_ACCOUNT",
    message: `Your account has been deactivated`,
    recommendedActions: [
      `Reach out to support to find out why it was deactivated`
    ]
  }
};
var LoginEndpoint = {
  path: "/auth",
  fullPath: "/merchants/auth",
  parentModule: "/merchants",
  method: "PATCH" /* Patch */
};

// src/types/merchants/endpoint-payloads/fetch-profile.payloads.ts
import { HttpStatusCode as HttpStatusCode3 } from "axios";
var FetchProfileErrors = {
  invalidMerchant: {
    statusCode: HttpStatusCode3.BadRequest,
    code: "INVALID_MERCHANT",
    data: null,
    message: `Invalid merchant requested`,
    recommendedActions: [
      `Contact support`
    ]
  }
};
var ProfileEndpoint = {
  path: "/profile",
  fullPath: "/merchants/profile",
  parentModule: "/merchants",
  method: "PATCH" /* Patch */
};

// src/types/merchants/endpoint-payloads/reserve-email.payloads.ts
import { HttpStatusCode as HttpStatusCode4 } from "axios";
var ReserveEmailErrors = {
  invalidPhoneNumber: {
    statusCode: HttpStatusCode4.BadRequest,
    code: "INVALID_PHONE_NUMBER",
    message: `Your phone number isn't quite what we're expecting`,
    recommendedActions: [
      `Ensure you're providing a proper mobile number`
    ]
  },
  duplicateMerchantDetected: (d) => {
    return {
      statusCode: HttpStatusCode4.BadRequest,
      code: "DUPLICATE_MERCHANT_DETECTED",
      message: `The ${d} you provided is already taken please provide another one or retrieve your account`,
      recommendedActions: [
        `Confirm that your ${d} is correct`,
        `If you're sure it's correct then that probably means you already have an account. Try using the account recovery tool`,
        `Provide entirely different details`
      ]
    };
  },
  compromisedPassword(changeDate) {
    return {
      statusCode: HttpStatusCode4.BadRequest,
      code: "COMPROMISED_PASSWORD",
      message: `This password is compromised. It was changed on ${changeDate.toDateString()}`,
      recommendedActions: [
        `Try using a totally different password`
      ],
      description: `This happens when a admin tries to use a password they already changed for some reason in the past`
    };
  },
  couldNotSendOtp: {
    statusCode: HttpStatusCode4.FailedDependency,
    code: "COULD_NOT_SEND_OTP_TO_RESERVE_EMAIL",
    message: `Your account was created but we couldn't send you an OTP`,
    recommendedActions: [
      `Login and try again in a few minutes`
    ]
  }
};
var ReserveEmailEndpoint = {
  path: "",
  fullPath: "/merchants",
  parentModule: "/merchants",
  method: "POST" /* Post */
};

// src/types/merchants/endpoint-payloads/get-access-token.payloads.ts
var GetAccessTokenEndpoint = {
  path: "/auth/token",
  fullPath: "/merchants/auth/token",
  parentModule: "/merchants",
  method: "GET" /* Get */
};

// src/types/merchants/endpoint-payloads/reset-password.payloads.ts
import { HttpStatusCode as HttpStatusCode5 } from "axios";
var ResetPasswordErrors = {
  confirmPasswordMismatch: {
    statusCode: HttpStatusCode5.BadRequest,
    code: "CONFIRM_PASSWORD_MISMATCH",
    message: `Your password and confirm password don't match`,
    recommendedActions: [
      `Ensure both passwords you're providing match`
    ]
  },
  lateResetRequest: {
    statusCode: HttpStatusCode5.ExpectationFailed,
    code: "LATE_RESET_REQUEST",
    message: `We couldn't find an otp verification to verify your password reset`,
    recommendedActions: [
      `Restart the process`,
      `Make sure you reset your password within 5 minutes of verifying the otp you're sent`
    ]
  }
};
var ResetPasswordEndpoint = {
  path: "/auth/passwords",
  fullPath: "/merchants/auth/passwords",
  parentModule: "/merchants",
  method: "PATCH" /* Patch */
};
var ForgotPasswordEndpoint = {
  path: "/auth/passwords",
  fullPath: "/merchants/auth/passwords",
  parentModule: "/merchants",
  method: "POST" /* Post */
};

// src/types/stores/endpoint-payloads/list-store-attributes.payloads.ts
var ListStoreAttributesEndpoint = {
  path: "/active-attributes",
  fullPath: "/store-mgt/active-attributes",
  parentModule: "/stores",
  method: "GET" /* Get */
};

// src/types/stores/endpoint-payloads/create-store.payloads.ts
import { HttpStatusCode as HttpStatusCode6 } from "axios";
var CreateStoreErrors = {
  noSuchAttribute: {
    statusCode: HttpStatusCode6.BadRequest,
    code: "NO_SUCH_ATTRIBUTE",
    message: `This attribute does not exist`
  },
  attributeHasNoSuchOption: (attrName) => {
    return {
      statusCode: HttpStatusCode6.BadRequest,
      code: "ATTRIBUTE_HAS_NO_SUCH_OPTION",
      message: `Attribute ${attrName} does not accommodate some options provided for it`
    };
  },
  requiredAttributeNotProvided: {
    statusCode: HttpStatusCode6.BadRequest,
    code: "REQUIRED_ATTRIBUTE_NOT_PROVIDED",
    message: "Required attribute(s) not provided",
    recommendedActions: [
      "Please provide all required attributes"
    ]
  }
};
var CreateStoreEndpoint = {
  path: "/stores",
  fullPath: "/stores",
  parentModule: "/stores",
  method: "POST" /* Post */
};

// src/types/stores/endpoint-payloads/manage-product.payloads.ts
import { HttpStatusCode as HttpStatusCode7 } from "axios";
var CreateProductErrors = {
  noSuchStoreForMerchant: {
    statusCode: HttpStatusCode7.BadRequest,
    code: "NO_SUCH_STORE_FOR_MERCHANT",
    message: "This store does not exist for this merchant"
  }
};
var UpdateProductErrors = __spreadProps(__spreadValues({}, CreateProductErrors), {
  noSuchProductInStore: {
    statusCode: HttpStatusCode7.BadRequest,
    code: "NO_SUCH_PRODUCT_IN_STORE",
    message: "This product does not exist in this store"
  }
});
var CreateProductEndpoint = {
  path: "/products",
  fullPath: "/products",
  parentModule: "/products",
  method: "POST" /* Post */
};
var ListProductsForStoreEndpoint = {
  path: "/list-for-store",
  fullPath: "/products/list-for-store",
  parentModule: "/products",
  method: "GET" /* Get */
};
var ViewOneProductEndpoint = {
  path: "/view-one",
  fullPath: "/products/view-one",
  parentModule: "/products",
  method: "GET" /* Get */
};
var UpdateProductEndpoint = {
  path: "/products",
  fullPath: "/products",
  parentModule: "/products",
  method: "PATCH" /* Patch */
};

// src/types/stores/endpoint-payloads/update-store.payload.ts
import { HttpStatusCode as HttpStatusCode8 } from "axios";
var UpdateStoreErrors = {
  noSuchStore: {
    statusCode: HttpStatusCode8.BadRequest,
    code: "NO_SUCH_STORE",
    message: `This store does not exist`
  },
  noSuchAttribute: CreateStoreErrors.noSuchAttribute,
  attributeHasNoSuchOption: CreateStoreErrors.attributeHasNoSuchOption
};
var UpdateStoreEndpoint = {
  path: "/stores",
  fullPath: "/stores",
  parentModule: "/stores",
  method: "PATCH" /* Patch */
};

// src/types/stores/endpoint-payloads/publish-store.payloads.ts
import { HttpStatusCode as HttpStatusCode9 } from "axios";
var PublishStoreErrors = {
  usedSubdomain: {
    statusCode: HttpStatusCode9.BadRequest,
    message: "This subdomain is already in use by another store",
    code: "USED_SUBDOMAIN",
    recommendedActions: [
      `Try setting another subdomain`
    ]
  },
  storeAlreadyPublished: {
    statusCode: HttpStatusCode9.BadRequest,
    message: `This store is already published`,
    code: "STORE_ALREADY_PUBLISHED"
  }
};
var PublishStoreEndpoint = {
  path: "/publish",
  fullPath: "/stores/publish",
  parentModule: "/stores",
  method: "PATCH" /* Patch */
};
var SuggestStoreSubdomainsEndpoint = {
  path: "/subdomain-suggestions",
  fullPath: "/stores/subdomain-suggestions",
  parentModule: "/stores",
  method: "GET" /* Get */
};

// src/types/stores/endpoint-payloads/manage-collection.payloads.ts
var AddOrRemove = /* @__PURE__ */ ((AddOrRemove2) => {
  AddOrRemove2["add"] = "add";
  AddOrRemove2["remove"] = "remove";
  return AddOrRemove2;
})(AddOrRemove || {});
var CreateCollectionEndpoint = {
  path: "/collections",
  fullPath: "/stores/collections",
  method: "POST" /* Post */
};
var EditCollectionEndpoint = {
  path: "/collections",
  fullPath: "/stores/collections",
  method: "PATCH" /* Patch */
};
var ListCollectionsEndpoint = {
  path: "/collections/list-for-store",
  fullPath: "/stores/collections/list-for-store",
  method: "GET" /* Get */
};
var ViewOneCollectionEndpoint = {
  path: "/collections/view-one",
  fullPath: "/stores/collections/view-one",
  method: "GET" /* Get */
};
var DeleteCollectionEndpoint = {
  path: "/collections",
  fullPath: "/stores/collections",
  method: "DELETE" /* Delete */
};
var ManageCollectionEndpoint = {
  path: "/collections/products",
  fullPath: "/stores/collections/products",
  method: "PATCH" /* Patch */
};
var ChangeCollectionProductsEndpoint = {
  path: "/collections/mutations",
  fullPath: "/stores/collections/mutations",
  method: "PATCH" /* Patch */
};

// src/types/stores/models/store.model.ts
var StoreStatus = /* @__PURE__ */ ((StoreStatus2) => {
  StoreStatus2["live"] = "live";
  StoreStatus2["maintenance"] = "maintenance";
  return StoreStatus2;
})(StoreStatus || {});

// src/types/stores/models/product.model.ts
var ProductStatus = /* @__PURE__ */ ((ProductStatus2) => {
  ProductStatus2["published"] = "published";
  ProductStatus2["drafted"] = "drafted";
  ProductStatus2["shelved"] = "shelved";
  return ProductStatus2;
})(ProductStatus || {});

// src/types/stores/models/cart.model.ts
var CartStatus = /* @__PURE__ */ ((CartStatus2) => {
  CartStatus2["shopping"] = "shopping";
  CartStatus2["addedCustomer"] = "added-customer";
  CartStatus2["addedDeliveryDetails"] = "added-delivery-details";
  CartStatus2["initiatedPayment"] = "initiated-payment";
  CartStatus2["abandoned"] = "abandoned";
  CartStatus2["checkedOut"] = "checked-out";
  return CartStatus2;
})(CartStatus || {});

// src/types/stores/models/order.model.ts
var OrderStatus = /* @__PURE__ */ ((OrderStatus2) => {
  OrderStatus2["awaitingPayment"] = "awaiting-payment";
  OrderStatus2["pendingDispatch"] = "pending-dispatch";
  OrderStatus2["dispatched"] = "dispatched";
  OrderStatus2["cancelled"] = "cancelled";
  OrderStatus2["cancelledWithRefund"] = "cancelled-with-refund";
  return OrderStatus2;
})(OrderStatus || {});
var PaymentMethod = /* @__PURE__ */ ((PaymentMethod2) => {
  PaymentMethod2["offlineTransfer"] = "offline-transfer";
  PaymentMethod2["physicalCash"] = "physical-cash";
  PaymentMethod2["bazeWebstore"] = "baze-webstore";
  PaymentMethod2["paymentLink"] = "payment-link";
  return PaymentMethod2;
})(PaymentMethod || {});
var PaymentGateway = /* @__PURE__ */ ((PaymentGateway2) => {
  PaymentGateway2["paystack"] = "paystack";
  return PaymentGateway2;
})(PaymentGateway || {});
var SalesChannel = /* @__PURE__ */ ((SalesChannel2) => {
  SalesChannel2["baze"] = "baze";
  SalesChannel2["whatsapp"] = "whatsapp";
  SalesChannel2["instagram"] = "instagram";
  SalesChannel2["twitter"] = "twitter";
  SalesChannel2["physicalStore"] = "physical-store";
  SalesChannel2["phone"] = "phone";
  SalesChannel2["other"] = "other";
  return SalesChannel2;
})(SalesChannel || {});

// src/types/utils/models/job.model.ts
var JobStatus = /* @__PURE__ */ ((JobStatus2) => {
  JobStatus2["initiated"] = "initiated";
  JobStatus2["pending"] = "pending";
  JobStatus2["completed"] = "completed";
  JobStatus2["failed"] = "failed";
  return JobStatus2;
})(JobStatus || {});
var JobTask = /* @__PURE__ */ ((JobTask2) => {
  JobTask2["bulkCustomerUpload"] = "bulk-customer-upload";
  JobTask2["bulkProductUpload"] = "bulk-product-upload";
  return JobTask2;
})(JobTask || {});
var JobClientType = /* @__PURE__ */ ((JobClientType2) => {
  JobClientType2["merchant"] = "merchant";
  JobClientType2["customer"] = "customer";
  JobClientType2["store"] = "store";
  JobClientType2["admin"] = "admin";
  JobClientType2["system"] = "system";
  return JobClientType2;
})(JobClientType || {});

// src/types/utils/models/revenue.model.ts
var RevenueSource = /* @__PURE__ */ ((RevenueSource2) => {
  RevenueSource2["order"] = "order";
  return RevenueSource2;
})(RevenueSource || {});
var Partner = /* @__PURE__ */ ((Partner2) => {
  Partner2["paystack"] = "paystack";
  return Partner2;
})(Partner || {});
export {
  AddOrRemove,
  BazeEventSource,
  CartStatus,
  ChangeCollectionProductsEndpoint,
  CreateCollectionEndpoint,
  CreateProductEndpoint,
  CreateProductErrors,
  CreateStoreEndpoint,
  CreateStoreErrors,
  DeleteCollectionEndpoint,
  EditCollectionEndpoint,
  FeeType,
  FetchProfileErrors,
  ForgotPasswordEndpoint,
  GetAccessTokenEndpoint,
  HttpMethods,
  JobClientType,
  JobStatus,
  JobTask,
  ListCollectionsEndpoint,
  ListProductsForStoreEndpoint,
  ListStoreAttributesEndpoint,
  LoginEndpoint,
  LoginErrors,
  ManageCollectionEndpoint,
  MerchantAccountStatus,
  OrderStatus,
  OtpContext,
  OtpVerificationErrors,
  Partner,
  PaymentGateway,
  PaymentMethod,
  ProductStatus,
  ProfileEndpoint,
  PublishStoreEndpoint,
  PublishStoreErrors,
  ResendOtpForEmailVerificationEndpoint,
  ResendOtpForPasswordResetEndpoint,
  ReserveEmailEndpoint,
  ReserveEmailErrors,
  ResetPasswordEndpoint,
  ResetPasswordErrors,
  RevenueSource,
  SalesChannel,
  StoreStatus,
  SuggestStoreSubdomainsEndpoint,
  UpdateProductEndpoint,
  UpdateProductErrors,
  UpdateStoreEndpoint,
  UpdateStoreErrors,
  VerificationProvider,
  VerificationStatus,
  VerifyOtpEndpoint,
  ViewOneCollectionEndpoint,
  ViewOneProductEndpoint
};
//# sourceMappingURL=index.js.map