"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var reducerUtils_1 = require("./reducerUtils");
exports.initialState = {
    isFetching: false,
    lastUpdated: 0,
    suggestions: []
};
function suggestions(state, action) {
    if (state === void 0) { state = exports.initialState; }
    switch (action.type) {
        case "INITIATE_SUGGEST":
            return reducerUtils_1.updateObject(state, { isFetching: true });
        case "SET_SUGGESTIONS_PROCESSOR":
            return reducerUtils_1.updateObject(state, { suggestionsProcessor: action.suggestionsProcessor });
        case "CLEAR_SUGGESTIONS":
            return reducerUtils_1.updateObject(state, { suggestions: [] });
        case "RECEIVE_SUGGESTIONS":
            var suggestions_1 = state.suggestionsProcessor ? state.suggestionsProcessor(action.suggestions) : action.suggestions;
            return reducerUtils_1.updateObject(state, { isFetching: false, lastUpdated: action.receivedAt, suggestions: suggestions_1 });
        default:
            return state;
    }
}
exports.suggestions = suggestions;
//# sourceMappingURL=suggestions.js.map