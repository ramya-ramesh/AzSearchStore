"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var reducerUtils_1 = require("./reducerUtils");
exports.initialState = {
    count: -1,
    isFetching: false,
    lastUpdated: 0,
    results: []
};
function results(state, action) {
    if (state === void 0) { state = exports.initialState; }
    switch (action.type) {
        case "INITIATE_SEARCH":
            return reducerUtils_1.updateObject(state, { isFetching: true });
        case "SET_RESULTS_PROCESSOR":
            return reducerUtils_1.updateObject(state, { resultsProcessor: action.resultsProcessor });
        case "RECEIVE_RESULTS":
            var results_1 = state.resultsProcessor ? state.resultsProcessor(action.results) : action.results;
            return reducerUtils_1.updateObject(state, { isFetching: false, lastUpdated: action.receivedAt, results: results_1, count: action.count });
        case "APPEND_RESULTS":
            results_1 = state.resultsProcessor ? state.results.concat(state.resultsProcessor(action.results)) : state.results.concat(action.results);
            return reducerUtils_1.updateObject(state, { isFetching: false, lastUpdated: action.receivedAt, results: results_1 });
        default:
            return state;
    }
}
exports.results = results;
//# sourceMappingURL=results.js.map