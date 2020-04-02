"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var resultsActions = require("./resultsActions");
var suggestionsActions = require("./suggestionsActions");
var facetsActions = require("./facetsActions");
var promise = require("es6-promise");
require("isomorphic-fetch");
var uriHelper_1 = require("../utils/uriHelper");
// todo this should probably be at the entry point of app
promise.polyfill();
var userAgent = "AzSearchStore/Preview";
var searchAndDispatch = function (dispatch, getState, _a) {
    var resultsActionToDispatch = _a.resultsActionToDispatch, facetsActionToDispatch = _a.facetsActionToDispatch;
    var searchState = getState();
    var service = searchState.config.service;
    var index = searchState.config.index;
    var parameters = searchState.parameters;
    console.log("**************************************************FORM LIB**************************************************");
    console.log("Parameters : " + parameters);
    var searchCallback = searchState.config.searchCallback;
    var searchURI = uriHelper_1.buildSearchURI(searchState.config, parameters);
    var postBody = uriHelper_1.buildPostBody(parameters.searchParameters, parameters.input, uriHelper_1.searchParameterValidator, searchState.facets);
    console.log("Post Body : " + JSON.stringify(postBody));
    var headers = new Headers({
        "api-key": searchState.config.queryKey,
        "Content-Type": "application/json",
        "User-Agent": userAgent,
        "x-ms-client-user-agent": userAgent
    });
    dispatch(resultsActions.initiateSearch());
    var promise = searchCallback ? searchCallback(searchState, postBody) :
        fetch(searchURI, {
            mode: "cors",
            headers: headers,
            method: "POST",
            body: JSON.stringify(postBody)
        });
    return promise.then(function (response) { return response.json(); })
        .then(function (json) {
        var results = json["value"];
        var count = json["@odata.count"];
        count = count >= 0 ? count : -1;
        dispatch(resultsActionToDispatch(results, Date.now(), count));
        var facets = json["@search.facets"];
        if (facetsActionToDispatch) {
            dispatch(facetsActionToDispatch(facets));
        }
    })
        .catch(function (error) {
        dispatch(resultsActions.handleSearchError(error.message));
    });
};
exports.fetchSearchResults = function (dispatch, getState) {
    return searchAndDispatch(dispatch, getState, { resultsActionToDispatch: resultsActions.recieveResults, facetsActionToDispatch: facetsActions.setFacetsValues });
};
exports.loadMoreSearchResults = function (dispatch, getState) {
    return searchAndDispatch(dispatch, getState, { resultsActionToDispatch: resultsActions.appendResults, facetsActionToDispatch: null });
};
exports.fetchSearchResultsFromFacet = function (dispatch, getState) {
    return searchAndDispatch(dispatch, getState, { resultsActionToDispatch: resultsActions.recieveResults, facetsActionToDispatch: facetsActions.updateFacetsValues });
};
exports.suggest = function (dispatch, getState) {
    var searchState = getState();
    var service = searchState.config.service;
    var index = searchState.config.index;
    var suggestCallBack = searchState.config.suggestCallback;
    var parameters = searchState.parameters;
    var suggestURI = uriHelper_1.buildSuggestionsURI(searchState.config, searchState.parameters);
    var postBody = uriHelper_1.buildPostBody(parameters.suggestionsParameters, parameters.input, uriHelper_1.suggestParameterValidator);
    var headers = new Headers({
        "api-key": searchState.config.queryKey,
        "Content-Type": "application/json",
        "User-Agent": userAgent,
        "x-ms-client-user-agent": userAgent
    });
    dispatch(suggestionsActions.initiateSuggest());
    var promise = suggestCallBack ? suggestCallBack(searchState, postBody) :
        fetch(suggestURI, {
            mode: "cors",
            headers: headers,
            method: "POST",
            body: JSON.stringify(postBody)
        });
    return promise.then(function (response) { return response.json(); })
        .then(function (json) {
        var suggestions = json["value"];
        dispatch(suggestionsActions.recieveSuggestions(suggestions, Date.now()));
    })
        .catch(function (error) {
        dispatch(suggestionsActions.handleSuggestError(error.message));
    });
};
//# sourceMappingURL=asyncActions.js.map