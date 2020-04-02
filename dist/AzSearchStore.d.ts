import * as redux from "redux";
import * as asyncActions from "./actions/asyncActions";
import * as configActions from "./actions/configActions";
import * as searchParameterActions from "./actions/searchParametersActions";
import * as suggestionsParameterActions from "./actions/suggestionsParametersActions";
import * as inputActions from "./actions/inputActions";
import * as facetsActions from "./actions/facetsActions";
import * as suggestionsActions from "./actions/suggestionsActions";
import * as resultsActions from "./actions/resultsActions";
import { Store } from "./store";
export { asyncActions, configActions, searchParameterActions, suggestionsParameterActions, inputActions, facetsActions, suggestionsActions, resultsActions, Store };
export declare class AzSearchStore {
    store: redux.Store<Store.SearchState>;
    constructor();
    subscribe(listener: () => void): void;
    getState(): Store.SearchState;
    setConfig(config: Store.Config): void;
    setSearchApiVersion(apiVersion: Store.SearchApiVersion): void;
    setSearchParameters(searchParameters: Store.SearchParameters): void;
    updateSearchParameters(searchParametersUpdate: Store.SearchParametersUpdate): void;
    incrementSkip(): void;
    decrementSkip(): void;
    setPage(page: number): void;
    setSuggestionsApiVersion(apiVersion: Store.SearchApiVersion): void;
    setSuggestionsParameters(suggestionsParameters: Store.SuggestionsParameters): void;
    updateSuggestionsParameters(suggestionsParametersUpdate: Store.SuggestionsParametersUpdate): void;
    setInput(input: string): void;
    addRangeFacet(fieldName: string, dataType: Store.RangeDataType, min: number | Date, max: number | Date): void;
    addCheckboxFacet(fieldName: string, dataType: Store.CheckboxDataType): void;
    toggleCheckboxFacet(fieldName: string, value: string | number): void;
    setFacetRange(fieldName: string, lowerBound: number, upperBound: number): void;
    clearFacetsSelections(): void;
    setGlobalFilter(key: string, filter: string): void;
    setSearchCallback(searchCallback: (state: Store.SearchState, postBody: {
        [key: string]: any;
    }) => Promise<any>): void;
    setSuggestCallback(suggestCallback: (state: Store.SearchState, postBody: {
        [key: string]: any;
    }) => Promise<any>): void;
    setResultsProcessor(resultsProcessor: (results: {}[]) => {}[]): void;
    setSuggestionsProcessor(suggestionsProcessor: (suggestions: {}[]) => {}[]): void;
    search(): Promise<void>;
    loadMore(): Promise<void>;
    searchFromFacetAction(): Promise<void>;
    suggest(): Promise<void>;
    clearSuggestions(): suggestionsActions.SuggestionsAction;
}
