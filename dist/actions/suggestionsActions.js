"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initiateSuggest = function () { return ({
    type: "INITIATE_SUGGEST"
}); };
exports.setSuggestionsProcessor = function (suggestionsProcessor) { return ({
    type: "SET_SUGGESTIONS_PROCESSOR",
    suggestionsProcessor: suggestionsProcessor
}); };
exports.recieveSuggestions = function (suggestions, receivedAt) { return ({
    type: "RECEIVE_SUGGESTIONS",
    suggestions: suggestions,
    receivedAt: receivedAt,
}); };
exports.clearSuggestions = function () { return ({
    type: "CLEAR_SUGGESTIONS",
}); };
exports.handleSuggestError = function (error) { return ({
    type: "HANDLE_ERROR",
    error: error
}); };
//# sourceMappingURL=suggestionsActions.js.map