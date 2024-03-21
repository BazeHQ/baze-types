"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  CreateProductEndpoint: () => CreateProductEndpoint,
  CreateProductErrors: () => CreateProductErrors,
  CreateStoreEndpoint: () => CreateStoreEndpoint,
  CreateStoreErrors: () => CreateStoreErrors,
  FetchProfileErrors: () => FetchProfileErrors,
  ForgotPasswordEndpoint: () => ForgotPasswordEndpoint,
  GetAccessTokenEndpoint: () => GetAccessTokenEndpoint,
  HttpMethods: () => HttpMethods,
  ListProductsForStoreEndpoint: () => ListProductsForStoreEndpoint,
  ListStoreAttributesEndpoint: () => ListStoreAttributesEndpoint,
  LoginEndpoint: () => LoginEndpoint,
  LoginErrors: () => LoginErrors,
  MerchantAccountStatus: () => MerchantAccountStatus,
  OtpContext: () => OtpContext,
  OtpVerificationErrors: () => OtpVerificationErrors,
  ProductStatus: () => ProductStatus,
  ProfileEndpoint: () => ProfileEndpoint,
  PublishStoreEndpoint: () => PublishStoreEndpoint,
  PublishStoreErrors: () => PublishStoreErrors,
  ResendOtpForPasswordResetEndpoint: () => ResendOtpForPasswordResetEndpoint,
  ResendOtpForPhoneVerificationEndpoint: () => ResendOtpForPhoneVerificationEndpoint,
  ReserveEmailEndpoint: () => ReserveEmailEndpoint,
  ReserveEmailErrors: () => ReserveEmailErrors,
  ResetPasswordEndpoint: () => ResetPasswordEndpoint,
  ResetPasswordErrors: () => ResetPasswordErrors,
  SuggestStoreSubdomainsEndpoint: () => SuggestStoreSubdomainsEndpoint,
  UpdateProductEndpoint: () => UpdateProductEndpoint,
  UpdateProductErrors: () => UpdateProductErrors,
  UpdateStoreEndpoint: () => UpdateStoreEndpoint,
  UpdateStoreErrors: () => UpdateStoreErrors,
  VerifyOtpEndpoint: () => VerifyOtpEndpoint,
  ViewOneProductEndpoint: () => ViewOneProductEndpoint
});
module.exports = __toCommonJS(src_exports);

// src/types/communications/endpoint-payloads/verify-otp.payloads.ts
var import_axios = require("axios");

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
  OtpContext2["ResetPassword"] = "reset-password";
  return OtpContext2;
})(OtpContext || {});
var OtpVerificationErrors = {
  invalidOtp: {
    statusCode: import_axios.HttpStatusCode.BadRequest,
    code: "INVALID_OTP",
    message: `This transaction is either invalid or expired`,
    recommendedActions: [
      `Request a new OTP`
    ]
  },
  retriesUsedUp: {
    statusCode: import_axios.HttpStatusCode.TooManyRequests,
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
var ResendOtpForPhoneVerificationEndpoint = {
  path: "/otps/phone-verification",
  fullPath: "/communications/otps/phone-verification",
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
var MerchantAccountStatus = /* @__PURE__ */ ((MerchantAccountStatus2) => {
  MerchantAccountStatus2["EmailReserved"] = "email-reserved";
  MerchantAccountStatus2["Inactive"] = "inactive";
  MerchantAccountStatus2["Deactivated"] = "deactivated";
  MerchantAccountStatus2["Active"] = "active";
  return MerchantAccountStatus2;
})(MerchantAccountStatus || {});

// src/types/merchants/endpoint-payloads/login.payloads.ts
var import_axios2 = require("axios");
var LoginErrors = {
  invalidEmailOrPassword: {
    statusCode: import_axios2.HttpStatusCode.Unauthorized,
    code: "INVALID_EMAIL_OR_PASSWORD",
    message: `The email or password you provided is invalid`,
    recommendedActions: [
      `Ensure that all your credentials are correct.`,
      `If you're sure that they're correct then you should probably use the "Forgot Password" toolkit`
    ]
  },
  deactivatedAccount: {
    statusCode: import_axios2.HttpStatusCode.Unauthorized,
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
var import_axios3 = require("axios");
var FetchProfileErrors = {
  invalidMerchant: {
    statusCode: import_axios3.HttpStatusCode.BadRequest,
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
var import_axios4 = require("axios");
var ReserveEmailErrors = {
  invalidPhoneNumber: {
    statusCode: import_axios4.HttpStatusCode.BadRequest,
    code: "INVALID_PHONE_NUMBER",
    message: `Your phone number isn't quite what we're expecting`,
    recommendedActions: [
      `Ensure you're providing a proper mobile number`
    ]
  },
  duplicateMerchantDetected: (d) => {
    return {
      statusCode: import_axios4.HttpStatusCode.BadRequest,
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
      statusCode: import_axios4.HttpStatusCode.BadRequest,
      code: "COMPROMISED_PASSWORD",
      message: `This password is compromised. It was changed on ${changeDate.toDateString()}`,
      recommendedActions: [
        `Try using a totally different password`
      ],
      description: `This happens when a admin tries to use a password they already changed for some reason in the past`
    };
  },
  couldNotSendOtp: {
    statusCode: import_axios4.HttpStatusCode.FailedDependency,
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
var import_axios5 = require("axios");
var ResetPasswordErrors = {
  confirmPasswordMismatch: {
    statusCode: import_axios5.HttpStatusCode.BadRequest,
    code: "CONFIRM_PASSWORD_MISMATCH",
    message: `Your password and confirm password don't match`,
    recommendedActions: [
      `Ensure both passwords you're providing match`
    ]
  },
  lateResetRequest: {
    statusCode: import_axios5.HttpStatusCode.ExpectationFailed,
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
var import_axios6 = require("axios");
var CreateStoreErrors = {
  noSuchAttribute: {
    statusCode: import_axios6.HttpStatusCode.BadRequest,
    code: "NO_SUCH_ATTRIBUTE",
    message: `This attribute does not exist`
  },
  attributeHasNoSuchOption: (attrName) => {
    return {
      statusCode: import_axios6.HttpStatusCode.BadRequest,
      code: "ATTRIBUTE_HAS_NO_SUCH_OPTION",
      message: `Attribute ${attrName} does not accommodate some options provided for it`
    };
  },
  requiredAttributeNotProvided: {
    statusCode: import_axios6.HttpStatusCode.BadRequest,
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

// src/types/stores/endpoint-payloads/product.payloads.ts
var import_axios7 = require("axios");
var CreateProductErrors = {
  noSuchStoreForMerchant: {
    statusCode: import_axios7.HttpStatusCode.BadRequest,
    code: "NO_SUCH_STORE_FOR_MERCHANT",
    message: "This store does not exist for this merchant"
  }
};
var UpdateProductErrors = __spreadProps(__spreadValues({}, CreateProductErrors), {
  noSuchProductInStore: {
    statusCode: import_axios7.HttpStatusCode.BadRequest,
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
var import_axios8 = require("axios");
var UpdateStoreErrors = {
  noSuchStore: {
    statusCode: import_axios8.HttpStatusCode.BadRequest,
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
var import_axios9 = require("axios");
var PublishStoreErrors = {
  usedSubdomain: {
    statusCode: import_axios9.HttpStatusCode.BadRequest,
    message: "This subdomain is already in use by another store",
    code: "USED_SUBDOMAIN",
    recommendedActions: [
      `Try setting another subdomain`
    ]
  },
  storeAlreadyPublished: {
    statusCode: import_axios9.HttpStatusCode.BadRequest,
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

// src/types/stores/models/product.model.ts
var ProductStatus = /* @__PURE__ */ ((ProductStatus2) => {
  ProductStatus2["published"] = "published";
  ProductStatus2["drafted"] = "drafted";
  ProductStatus2["shelved"] = "shelved";
  return ProductStatus2;
})(ProductStatus || {});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CreateProductEndpoint,
  CreateProductErrors,
  CreateStoreEndpoint,
  CreateStoreErrors,
  FetchProfileErrors,
  ForgotPasswordEndpoint,
  GetAccessTokenEndpoint,
  HttpMethods,
  ListProductsForStoreEndpoint,
  ListStoreAttributesEndpoint,
  LoginEndpoint,
  LoginErrors,
  MerchantAccountStatus,
  OtpContext,
  OtpVerificationErrors,
  ProductStatus,
  ProfileEndpoint,
  PublishStoreEndpoint,
  PublishStoreErrors,
  ResendOtpForPasswordResetEndpoint,
  ResendOtpForPhoneVerificationEndpoint,
  ReserveEmailEndpoint,
  ReserveEmailErrors,
  ResetPasswordEndpoint,
  ResetPasswordErrors,
  SuggestStoreSubdomainsEndpoint,
  UpdateProductEndpoint,
  UpdateProductErrors,
  UpdateStoreEndpoint,
  UpdateStoreErrors,
  VerifyOtpEndpoint,
  ViewOneProductEndpoint
});
//# sourceMappingURL=index.cjs.map