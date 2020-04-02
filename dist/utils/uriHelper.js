"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var URI = require("urijs");
function searchParameterValidator(parameters) {
    // todo validate params
}
exports.searchParameterValidator = searchParameterValidator;
function suggestParameterValidator(parameters) {
    if (!parameters.suggesterName) {
        throw new Error("Parameter 'suggesterName' is required to generate valid suggest api request");
    }
}
exports.suggestParameterValidator = suggestParameterValidator;
function buildPostBody(parameters, input, validator, facets) {
    validator(parameters);
    var parameterMap = parameters;
    var params = {};
    Object.keys(parameterMap).forEach(function (parameter) {
        var value = parameterMap[parameter];
        !(value == null) && parameter !== "apiVersion" ? params[parameter] = value : 0;
    });
    if (facets) {
        var facetClauses = getFacetClauses(facets);
        facetClauses ? params["facets"] = facetClauses : 0;
        var filter = getFilterClauses(facets);
        filter ? params["filter"] = filter : 0;
    }
    params["search"] = input;
    return params;
}
exports.buildPostBody = buildPostBody;
function getFilterClauses(facets) {
    var filteredFacets = Object.keys(facets.facets).filter(function (key) {
        return facets.facets[key].filterClause.length > 0;
    });
    var filters = filteredFacets.map(function (key) {
        var filterSplitArr = facets.facets[key].filterClause.split(" ");
        var conditionKey = filterSplitArr.shift();
        var restConditionStr = filterSplitArr.join(" ");
        conditionKey = conditionKey.substring(1);
        var query = "";
        if (conditionKey.includes("/")) {
            var arr = conditionKey.split("/");
            var parent_1 = arr[0];
            var child = arr[1];
            query = " " + parent_1 + "/any(elem : elem/" + child + " ";
        }
        if (query)
            return query + restConditionStr;
        else
            return facets.facets[key].filterClause;
    });
    var globalFilter = getGlobalFilter(facets.globalFilters);
    if (globalFilter) {
        filters.push(globalFilter);
    }
    return filters.join(" and ");
}
function getGlobalFilter(globalFilters) {
    var filters = Object.keys(globalFilters).filter(function (key) {
        return globalFilters[key];
    }).map(function (key) { return globalFilters[key]; });
    return filters.join(" and ");
}
function getFacetClauses(facets) {
    var facetKeys = Object.keys(facets.facets);
    var clauses = facetKeys.map(function (facetKey) {
        return facets.facets[facetKey].facetClause;
    });
    clauses = clauses.length ? clauses : null;
    return clauses;
}
function buildSearchURI(config, parameters) {
    var service = config.service, index = config.index;
    var apiVersion = parameters.searchParameters.apiVersion;
    var uriTemplate = "https://" + service + ".search.windows.net/indexes/" + index + "/docs/search?api-version=" + apiVersion;
    var searchURI = URI(uriTemplate);
    return searchURI.valueOf();
}
exports.buildSearchURI = buildSearchURI;
function buildSuggestionsURI(config, parameters) {
    var service = config.service, index = config.index;
    var apiVersion = parameters.suggestionsParameters.apiVersion;
    var uriTemplate = "https://" + service + ".search.windows.net/indexes/" + index + "/docs/suggest?api-version=" + apiVersion;
    var searchURI = URI(uriTemplate);
    return searchURI.valueOf();
}
exports.buildSuggestionsURI = buildSuggestionsURI;
//# sourceMappingURL=uriHelper.js.map