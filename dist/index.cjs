"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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
  CustomerAccountStatus: () => CustomerAccountStatus,
  FetchProfileErrors: () => FetchProfileErrors,
  ForgotPasswordEndpoint: () => ForgotPasswordEndpoint,
  GetAccessTokenEndpoint: () => GetAccessTokenEndpoint,
  HttpMethods: () => HttpMethods,
  LoginEndpoint: () => LoginEndpoint,
  LoginErrors: () => LoginErrors,
  OtpContext: () => OtpContext,
  OtpVerificationErrors: () => OtpVerificationErrors,
  ProfileEndpoint: () => ProfileEndpoint,
  ResendOtpForPasswordResetEndpoint: () => ResendOtpForPasswordResetEndpoint,
  ResendOtpForPhoneVerificationEndpoint: () => ResendOtpForPhoneVerificationEndpoint,
  ReserveEmailEndpoint: () => ReserveEmailEndpoint,
  ReserveEmailErrors: () => ReserveEmailErrors,
  ResetPasswordEndpoint: () => ResetPasswordEndpoint,
  ResetPasswordErrors: () => ResetPasswordErrors,
  VerifyOtpEndpoint: () => VerifyOtpEndpoint
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

// src/types/customers/models/customer.model.ts
var CustomerAccountStatus = /* @__PURE__ */ ((CustomerAccountStatus2) => {
  CustomerAccountStatus2["EmailReserved"] = "email-reserved";
  CustomerAccountStatus2["Inactive"] = "inactive";
  CustomerAccountStatus2["Deactivated"] = "deactivated";
  CustomerAccountStatus2["Active"] = "active";
  return CustomerAccountStatus2;
})(CustomerAccountStatus || {});

// src/types/customers/endpoint-payloads/login.payloads.ts
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
  fullPath: "/customers/auth",
  parentModule: "/customers",
  method: "PATCH" /* Patch */
};

// src/types/customers/endpoint-payloads/fetch-profile.payloads.ts
var import_axios3 = require("axios");
var FetchProfileErrors = {
  invalidCustomer: {
    statusCode: import_axios3.HttpStatusCode.BadRequest,
    code: "INVALID_CUSTOMER",
    data: null,
    message: `Invalid customer requested`,
    recommendedActions: [
      `Contact support`
    ]
  }
};
var ProfileEndpoint = {
  path: "/profile",
  fullPath: "/customers/profile",
  parentModule: "/customers",
  method: "PATCH" /* Patch */
};

// src/types/customers/endpoint-payloads/reserve-email.payloads.ts
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
  duplicateCustomerDetected: (d) => {
    return {
      statusCode: import_axios4.HttpStatusCode.BadRequest,
      code: "DUPLICATE_CUSTOMER_DETECTED",
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
  fullPath: "/customers",
  parentModule: "/customers",
  method: "POST" /* Post */
};

// src/types/customers/endpoint-payloads/get-access-token.payloads.ts
var GetAccessTokenEndpoint = {
  path: "/auth/token",
  fullPath: "/customers/auth/token",
  parentModule: "/customers",
  method: "GET" /* Get */
};

// src/types/customers/endpoint-payloads/reset-password.payloads.ts
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
  fullPath: "/customers/auth/passwords",
  parentModule: "/customers",
  method: "PATCH" /* Patch */
};
var ForgotPasswordEndpoint = {
  path: "/auth/passwords",
  fullPath: "/customers/auth/passwords",
  parentModule: "/customers",
  method: "POST" /* Post */
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CustomerAccountStatus,
  FetchProfileErrors,
  ForgotPasswordEndpoint,
  GetAccessTokenEndpoint,
  HttpMethods,
  LoginEndpoint,
  LoginErrors,
  OtpContext,
  OtpVerificationErrors,
  ProfileEndpoint,
  ResendOtpForPasswordResetEndpoint,
  ResendOtpForPhoneVerificationEndpoint,
  ReserveEmailEndpoint,
  ReserveEmailErrors,
  ResetPasswordEndpoint,
  ResetPasswordErrors,
  VerifyOtpEndpoint
});
//# sourceMappingURL=index.cjs.map