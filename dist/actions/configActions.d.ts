import { Store } from "../store";
export declare type ConfigAction = {
    type: "SET_CONFIG";
    config: Store.Config;
} | {
    type: "SET_SEARCH_CALLBACK";
    searchCallback: (state: Store.SearchState, postBody: {
        [key: string]: any;
    }) => Promise<any>;
} | {
    type: "SET_SUGGEST_CALLBACK";
    suggestCallback: (state: Store.SearchState, postBody: {
        [key: string]: any;
    }) => Promise<any>;
};
export declare const setConfig: (config: Store.Config) => ConfigAction;
export declare const setSearchCallback: (searchCallback: (state: Store.SearchState, postBody: {
    [key: string]: any;
}) => Promise<any>) => {
    type: string;
    searchCallback: (state: Store.SearchState, postBody: {
        [key: string]: any;
    }) => Promise<any>;
};
export declare const setSuggestCallback: (suggestCallback: (state: Store.SearchState, postBody: {
    [key: string]: any;
}) => Promise<any>) => {
    type: string;
    suggestCallback: (state: Store.SearchState, postBody: {
        [key: string]: any;
    }) => Promise<any>;
};
