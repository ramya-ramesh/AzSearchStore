"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var input_1 = require("./input");
var searchParameters_1 = require("./searchParameters");
var suggestionsParameters_1 = require("./suggestionsParameters");
exports.parameters = redux_1.combineReducers({
    input: input_1.input,
    searchParameters: searchParameters_1.searchParameters,
    suggestionsParameters: suggestionsParameters_1.suggestionsParameters
});
//# sourceMappingURL=parameters.js.map