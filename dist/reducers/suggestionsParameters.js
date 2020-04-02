"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var reducerUtils_1 = require("./reducerUtils");
exports.initialState = {
    orderby: null,
    searchFields: null,
    select: null,
    top: 5,
    apiVersion: "2016-09-01",
    filter: null,
    fuzzy: false,
    highlightPostTag: null,
    highlightPreTag: null,
    suggesterName: null
};
function suggestionsParameters(state, action) {
    if (state === void 0) { state = exports.initialState; }
    switch (action.type) {
        case "SET_SUGGESTIONS_APIVERSION":
            return reducerUtils_1.updateObject(state, { apiVersion: action.apiVersion });
        case "SET_SUGGESTIONS_PARAMETERS":
            return action.parameters;
        case "UPDATE_SUGGESTIONS_PARAMETERS":
            return reducerUtils_1.updateObject(state, action.parameters);
        default:
            return state;
    }
}
exports.suggestionsParameters = suggestionsParameters;
//# sourceMappingURL=suggestionsParameters.js.map