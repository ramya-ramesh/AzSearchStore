import { Store } from "../store";
export declare type SearchParametersAction = {
    type: "SET_SEARCH_APIVERSION";
    apiVersion: Store.SearchApiVersion;
} | {
    type: "SET_SEARCH_PARAMETERS";
    parameters: Store.SearchParameters;
} | {
    type: "UPDATE_SEARCH_PARAMETERS";
    parameters: Store.SearchParametersUpdate;
} | {
    type: "INCREMENT_SKIP";
} | {
    type: "DECREMENT_SKIP";
} | {
    type: "SET_PAGE";
    page: number;
};
export declare const setSearchApiVersion: (apiVersion: Store.SearchApiVersion) => SearchParametersAction;
export declare const setSearchParameters: (parameters: Store.SearchParameters) => SearchParametersAction;
export declare const updateSearchParameters: (parameters: Store.SearchParametersUpdate) => SearchParametersAction;
export declare const incrementSkip: () => SearchParametersAction;
export declare const decrementSkip: () => SearchParametersAction;
export declare const setPage: (page: number) => SearchParametersAction;
