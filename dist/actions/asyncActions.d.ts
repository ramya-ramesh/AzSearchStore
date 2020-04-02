import { Store } from "../store";
import "isomorphic-fetch";
import { ThunkAction } from "redux-thunk";
export declare const fetchSearchResults: ThunkAction<Promise<void>, Store.SearchState, {}>;
export declare const loadMoreSearchResults: ThunkAction<Promise<void>, Store.SearchState, {}>;
export declare const fetchSearchResultsFromFacet: ThunkAction<Promise<void>, Store.SearchState, {}>;
export declare const suggest: ThunkAction<Promise<void>, Store.SearchState, {}>;
