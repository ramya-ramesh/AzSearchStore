"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var config_1 = require("./config");
var results_1 = require("./results");
var parameters_1 = require("./parameters");
var facets_1 = require("./facets");
var suggestions_1 = require("./suggestions");
exports.reducers = redux_1.combineReducers({
    config: config_1.config,
    results: results_1.results,
    parameters: parameters_1.parameters,
    facets: facets_1.facets,
    suggestions: suggestions_1.suggestions
});
//# sourceMappingURL=reducers.js.map