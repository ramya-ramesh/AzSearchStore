"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setSearchApiVersion = function (apiVersion) { return ({
    type: "SET_SEARCH_APIVERSION",
    apiVersion: apiVersion
}); };
exports.setSearchParameters = function (parameters) { return ({
    type: "SET_SEARCH_PARAMETERS",
    parameters: parameters
}); };
exports.updateSearchParameters = function (parameters) { return ({
    type: "UPDATE_SEARCH_PARAMETERS",
    parameters: parameters
}); };
exports.incrementSkip = function () { return ({
    type: "INCREMENT_SKIP",
}); };
exports.decrementSkip = function () { return ({
    type: "DECREMENT_SKIP",
}); };
exports.setPage = function (page) { return ({
    type: "SET_PAGE",
    page: page
}); };
//# sourceMappingURL=searchParametersActions.js.map