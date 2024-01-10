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
export {
  CustomerAccountStatus,
  OtpContext,
  TokenActions,
  TokenExpiry
};
//# sourceMappingURL=index.js.map