"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux = require("redux");
var redux_thunk_1 = require("redux-thunk");
var reducers_1 = require("./reducers/reducers");
var asyncActions = require("./actions/asyncActions");
exports.asyncActions = asyncActions;
var configActions = require("./actions/configActions");
exports.configActions = configActions;
var searchParameterActions = require("./actions/searchParametersActions");
exports.searchParameterActions = searchParameterActions;
var suggestionsParameterActions = require("./actions/suggestionsParametersActions");
exports.suggestionsParameterActions = suggestionsParameterActions;
var inputActions = require("./actions/inputActions");
exports.inputActions = inputActions;
var facetsActions = require("./actions/facetsActions");
exports.facetsActions = facetsActions;
var suggestionsActions = require("./actions/suggestionsActions");
exports.suggestionsActions = suggestionsActions;
var resultsActions = require("./actions/resultsActions");
exports.resultsActions = resultsActions;
var AzSearchStore = /** @class */ (function () {
    function AzSearchStore() {
        this.store = redux.createStore(reducers_1.reducers, {}, redux.applyMiddleware(redux_thunk_1.default));
    }
    // subscribing and reading state
    AzSearchStore.prototype.subscribe = function (listener) {
        this.store.subscribe(listener);
    };
    AzSearchStore.prototype.getState = function () {
        return this.store.getState();
    };
    // basic config
    AzSearchStore.prototype.setConfig = function (config) {
        this.store.dispatch(configActions.setConfig(config));
    };
    // manipulating parameters for search requests
    AzSearchStore.prototype.setSearchApiVersion = function (apiVersion) {
        this.store.dispatch(searchParameterActions.setSearchApiVersion(apiVersion));
    };
    AzSearchStore.prototype.setSearchParameters = function (searchParameters) {
        this.store.dispatch(searchParameterActions.setSearchParameters(searchParameters));
    };
    AzSearchStore.prototype.updateSearchParameters = function (searchParametersUpdate) {
        this.store.dispatch(searchParameterActions.updateSearchParameters(searchParametersUpdate));
    };
    AzSearchStore.prototype.incrementSkip = function () {
        this.store.dispatch(searchParameterActions.incrementSkip);
    };
    AzSearchStore.prototype.decrementSkip = function () {
        this.store.dispatch(searchParameterActions.decrementSkip);
    };
    AzSearchStore.prototype.setPage = function (page) {
        this.store.dispatch(searchParameterActions.setPage(page));
    };
    // manipulating suggestions parameters
    AzSearchStore.prototype.setSuggestionsApiVersion = function (apiVersion) {
        this.store.dispatch(suggestionsParameterActions.setSuggestionsApiVersion(apiVersion));
    };
    AzSearchStore.prototype.setSuggestionsParameters = function (suggestionsParameters) {
        this.store.dispatch(suggestionsParameterActions.setSuggestionsParameters(suggestionsParameters));
    };
    AzSearchStore.prototype.updateSuggestionsParameters = function (suggestionsParametersUpdate) {
        this.store.dispatch(suggestionsParameterActions.updateSuggestionsParameters(suggestionsParametersUpdate));
    };
    // setting input
    AzSearchStore.prototype.setInput = function (input) {
        this.store.dispatch(inputActions.setInput(input));
    };
    // faceting and filtering
    AzSearchStore.prototype.addRangeFacet = function (fieldName, dataType, min, max) {
        this.store.dispatch(facetsActions.addRangeFacet(fieldName, dataType, min, max));
    };
    AzSearchStore.prototype.addCheckboxFacet = function (fieldName, dataType) {
        this.store.dispatch(facetsActions.addCheckboxFacet(fieldName, dataType));
    };
    AzSearchStore.prototype.toggleCheckboxFacet = function (fieldName, value) {
        this.store.dispatch(facetsActions.toggleCheckboxFacetSelection(fieldName, value));
    };
    AzSearchStore.prototype.setFacetRange = function (fieldName, lowerBound, upperBound) {
        this.store.dispatch(facetsActions.setFacetRange(fieldName, lowerBound, upperBound));
    };
    AzSearchStore.prototype.clearFacetsSelections = function () {
        this.store.dispatch(facetsActions.clearFacetsSelections());
    };
    AzSearchStore.prototype.setGlobalFilter = function (key, filter) {
        this.store.dispatch(facetsActions.setGlobalFilter(key, filter));
    };
    // extensibility
    AzSearchStore.prototype.setSearchCallback = function (searchCallback) {
        this.store.dispatch(configActions.setSearchCallback(searchCallback));
    };
    AzSearchStore.prototype.setSuggestCallback = function (suggestCallback) {
        this.store.dispatch(configActions.setSuggestCallback(suggestCallback));
    };
    AzSearchStore.prototype.setResultsProcessor = function (resultsProcessor) {
        this.store.dispatch(resultsActions.setResultsProcessor(resultsProcessor));
    };
    AzSearchStore.prototype.setSuggestionsProcessor = function (suggestionsProcessor) {
        this.store.dispatch(suggestionsActions.setSuggestionsProcessor(suggestionsProcessor));
    };
    // search
    AzSearchStore.prototype.search = function () {
        return this.store.dispatch(asyncActions.fetchSearchResults);
    };
    AzSearchStore.prototype.loadMore = function () {
        return this.store.dispatch(asyncActions.loadMoreSearchResults);
    };
    AzSearchStore.prototype.searchFromFacetAction = function () {
        return this.store.dispatch(asyncActions.fetchSearchResultsFromFacet);
    };
    // suggest
    AzSearchStore.prototype.suggest = function () {
        return this.store.dispatch(asyncActions.suggest);
    };
    AzSearchStore.prototype.clearSuggestions = function () {
        return this.store.dispatch(suggestionsActions.clearSuggestions());
    };
    return AzSearchStore;
}());
exports.AzSearchStore = AzSearchStore;
//# sourceMappingURL=AzSearchStore.js.map