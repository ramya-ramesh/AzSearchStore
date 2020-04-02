"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setConfig = function (config) { return ({
    type: "SET_CONFIG",
    config: config
}); };
exports.setSearchCallback = function (searchCallback) { return ({
    type: "SET_SEARCH_CALLBACK",
    searchCallback: searchCallback
}); };
exports.setSuggestCallback = function (suggestCallback) { return ({
    type: "SET_SUGGEST_CALLBACK",
    suggestCallback: suggestCallback
}); };
//# sourceMappingURL=configActions.js.map