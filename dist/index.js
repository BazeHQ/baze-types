// src/types/communications/endpoint-payloads/verify-otp.payloads.ts
import { HttpStatusCode } from "axios";

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
  fullPath: "/customers/auth",
  parentModule: "/customers",
  method: "PATCH" /* Patch */
};

// src/types/customers/endpoint-payloads/fetch-profile.payloads.ts
import { HttpStatusCode as HttpStatusCode3 } from "axios";
var FetchProfileErrors = {
  invalidCustomer: {
    statusCode: HttpStatusCode3.BadRequest,
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
  duplicateCustomerDetected: (d) => {
    return {
      statusCode: HttpStatusCode4.BadRequest,
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

// src/types/stores/endpoint-payloads/product.payloads.ts
import { HttpStatusCode as HttpStatusCode7 } from "axios";
var CreateProductErrors = {
  default: {
    statusCode: HttpStatusCode7.BadRequest,
    code: "DEFAULT_CREATE_PRODUCT_ERROR",
    message: `This is an example error`
  }
};
var createProductEndpoint = {
  path: "/products",
  fullPath: "/products",
  parentModule: "/products",
  method: "POST" /* Post */
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
export {
  CreateProductErrors,
  CreateStoreEndpoint,
  CreateStoreErrors,
  CustomerAccountStatus,
  FetchProfileErrors,
  ForgotPasswordEndpoint,
  GetAccessTokenEndpoint,
  HttpMethods,
  ListStoreAttributesEndpoint,
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
  UpdateProductEndpoint,
  UpdateStoreEndpoint,
  UpdateStoreErrors,
  VerifyOtpEndpoint,
  createProductEndpoint
};
//# sourceMappingURL=index.js.map