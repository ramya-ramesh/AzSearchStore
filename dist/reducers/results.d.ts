import { ResultsAction } from "../actions/resultsActions";
import { Store } from "../store";
export declare const initialState: Store.SearchResults;
export declare function results(state: Store.SearchResults, action: ResultsAction): Store.SearchResults;
