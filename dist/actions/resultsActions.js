"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initiateSearch = function () { return ({
    type: "INITIATE_SEARCH"
}); };
exports.setResultsProcessor = function (resultsProcessor) { return ({
    type: "SET_RESULTS_PROCESSOR",
    resultsProcessor: resultsProcessor
}); };
exports.recieveResults = function (results, receivedAt, count) { return ({
    type: "RECEIVE_RESULTS",
    results: results,
    receivedAt: receivedAt,
    count: count
}); };
exports.appendResults = function (results, receivedAt) { return ({
    type: "APPEND_RESULTS",
    results: results,
    receivedAt: receivedAt
}); };
exports.handleSearchError = function (error) { return ({
    type: "HANDLE_ERROR",
    error: error
}); };
//# sourceMappingURL=resultsActions.js.map