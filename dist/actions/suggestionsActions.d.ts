export declare type SuggestionsAction = {
    type: "INITIATE_SUGGEST";
} | {
    type: "SET_SUGGESTIONS_PROCESSOR";
    suggestionsProcessor: (suggestions: {}[]) => {}[];
} | {
    type: "RECEIVE_SUGGESTIONS";
    suggestions: {}[];
    receivedAt: number;
} | {
    type: "CLEAR_SUGGESTIONS";
} | {
    type: "HANDLE_ERROR";
    error: string;
};
export declare const initiateSuggest: () => SuggestionsAction;
export declare const setSuggestionsProcessor: (suggestionsProcessor: (suggestions: {}[]) => {}[]) => {
    type: string;
    suggestionsProcessor: (suggestions: {}[]) => {}[];
};
export declare const recieveSuggestions: (suggestions: {}[], receivedAt: number) => SuggestionsAction;
export declare const clearSuggestions: () => SuggestionsAction;
export declare const handleSuggestError: (error: string) => SuggestionsAction;
