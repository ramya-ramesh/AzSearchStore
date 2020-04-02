export declare type ResultsAction = {
    type: "INITIATE_SEARCH";
} | {
    type: "SET_RESULTS_PROCESSOR";
    resultsProcessor: (results: {}[]) => {}[];
} | {
    type: "RECEIVE_RESULTS";
    results: {}[];
    receivedAt: number;
    count: number;
} | {
    type: "APPEND_RESULTS";
    results: {}[];
    receivedAt: number;
} | {
    type: "HANDLE_ERROR";
    error: string;
};
export declare const initiateSearch: () => ResultsAction;
export declare const setResultsProcessor: (resultsProcessor: (results: {}[]) => {}[]) => {
    type: string;
    resultsProcessor: (results: {}[]) => {}[];
};
export declare const recieveResults: (results: {}[], receivedAt: number, count: number) => ResultsAction;
export declare const appendResults: (results: {}[], receivedAt: number) => ResultsAction;
export declare const handleSearchError: (error: string) => ResultsAction;
