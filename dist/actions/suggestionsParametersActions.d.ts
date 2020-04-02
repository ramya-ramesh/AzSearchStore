import { Store } from "../store";
export declare type SuggestionsParametersAction = {
    type: "SET_SUGGESTIONS_APIVERSION";
    apiVersion: Store.SearchApiVersion;
} | {
    type: "SET_SUGGESTIONS_PARAMETERS";
    parameters: Store.SuggestionsParameters;
} | {
    type: "UPDATE_SUGGESTIONS_PARAMETERS";
    parameters: Store.SuggestionsParametersUpdate;
};
export declare const setSuggestionsApiVersion: (apiVersion: Store.SearchApiVersion) => SuggestionsParametersAction;
export declare const setSuggestionsParameters: (parameters: Store.SuggestionsParameters) => SuggestionsParametersAction;
export declare const updateSuggestionsParameters: (parameters: Store.SuggestionsParametersUpdate) => SuggestionsParametersAction;
