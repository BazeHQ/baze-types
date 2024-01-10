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
  OtpContext: () => OtpContext,
  TokenActions: () => TokenActions,
  TokenExpiry: () => TokenExpiry
});
module.exports = __toCommonJS(src_exports);

// src/types/communications/endpoint-payloads/verify-otp.payloads.ts
var OtpContext = /* @__PURE__ */ ((OtpContext2) => {
  OtpContext2["VerifyPhoneNumber"] = "verify-phone-number";
  return OtpContext2;
})(OtpContext || {});

// src/types/customers/models/customer.model.ts
var CustomerAccountStatus = /* @__PURE__ */ ((CustomerAccountStatus2) => {
  CustomerAccountStatus2["EmailReserved"] = "email-reserved";
  CustomerAccountStatus2["Inactive"] = "inactive";
  CustomerAccountStatus2["Deactivated"] = "deactivated";
  CustomerAccountStatus2["Active"] = "active";
  return CustomerAccountStatus2;
})(CustomerAccountStatus || {});
var TokenActions = /* @__PURE__ */ ((TokenActions2) => {
  TokenActions2["ReserveEmail"] = "reserve-email";
  TokenActions2["PlatformAccess"] = "platform-access";
  return TokenActions2;
})(TokenActions || {});
var TokenExpiry = {
  "reserve-email": "1h",
  "platform-access": "5d"
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CustomerAccountStatus,
  OtpContext,
  TokenActions,
  TokenExpiry
});
//# sourceMappingURL=index.cjs.map