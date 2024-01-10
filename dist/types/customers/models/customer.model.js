"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenExpiry = exports.TokenActions = exports.CustomerAccountStatus = void 0;
var CustomerAccountStatus;
(function (CustomerAccountStatus) {
    CustomerAccountStatus["EmailReserved"] = "email-reserved";
    CustomerAccountStatus["Inactive"] = "inactive";
    CustomerAccountStatus["Deactivated"] = "deactivated";
    CustomerAccountStatus["Active"] = "active";
})(CustomerAccountStatus || (exports.CustomerAccountStatus = CustomerAccountStatus = {}));
var TokenActions;
(function (TokenActions) {
    TokenActions["ReserveEmail"] = "reserve-email";
    TokenActions["PlatformAccess"] = "platform-access";
})(TokenActions || (exports.TokenActions = TokenActions = {}));
exports.TokenExpiry = {
    'reserve-email': '1h',
    'platform-access': '5d'
};
