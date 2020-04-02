import { Store } from "../store";
export declare function searchParameterValidator(parameters: Store.SearchParameters): void;
export declare function suggestParameterValidator(parameters: Store.SuggestionsParameters): void;
export declare function buildPostBody(parameters: Store.SearchParameters | Store.SuggestionsParameters, input: string, validator: (parameters: Store.SearchParameters | Store.SuggestionsParameters) => void, facets?: Store.Facets): {
    [key: string]: any;
};
export declare function buildSearchURI(config: Store.Config, parameters: Store.Parameters): string;
export declare function buildSuggestionsURI(config: Store.Config, parameters: Store.Parameters): string;
