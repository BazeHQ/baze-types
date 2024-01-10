"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEnumValuesAsArray = void 0;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getEnumValuesAsArray(e) {
    var objectKeys = Object.keys(e);
    return objectKeys.map(function (key) { return e[key]; });
}
exports.getEnumValuesAsArray = getEnumValuesAsArray;
