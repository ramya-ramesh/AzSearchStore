export declare namespace Store {
    type Config = {
        index: string;
        queryKey: string;
        service: string;
        suggestCallback?: (state: Store.SearchState, postBody: {
            [key: string]: any;
        }) => Promise<any>;
        searchCallback?: (state: Store.SearchState, postBody: {
            [key: string]: any;
        }) => Promise<any>;
    };
    type SearchApiVersion = "2016-09-01" | "2015-02-28-Preview";
    type SearchMode = "any" | "all";
    type QueryType = "simple" | "full";
    type SearchParameters = {
        count: boolean;
        top: number;
        skip: number;
        orderby: string;
        searchMode: SearchMode;
        scoringProfile: string;
        select: string;
        searchFields: string;
        minimumCoverage?: string;
        apiVersion: SearchApiVersion;
        queryType: QueryType;
        scoringParameters: string[];
        highlight: string;
        highlightPreTag: string;
        highlightPostTag: string;
    };
    type SearchParametersUpdate = {
        count?: boolean;
        top?: number;
        skip?: number;
        orderby?: string;
        searchMode?: SearchMode;
        scoringProfile?: string;
        select?: string;
        searchFields?: string;
        minimumCoverage?: string;
        apiVersion?: SearchApiVersion;
        queryType?: QueryType;
        scoringParameters?: string[];
        highlight?: string;
        highlightPreTag?: string;
        highlightPostTag?: string;
    };
    type SuggestionsParameters = {
        top: number;
        filter: string;
        orderby: string;
        fuzzy: boolean;
        highlightPreTag: string;
        highlightPostTag: string;
        select: string;
        searchFields: string;
        minimumCoverage?: string;
        apiVersion: SearchApiVersion;
        suggesterName: string;
    };
    type SuggestionsParametersUpdate = {
        top?: number;
        filter?: string;
        orderby?: string;
        fuzzy?: boolean;
        highlightPreTag?: string;
        highlightPostTag?: string;
        select?: string;
        searchFields?: string;
        minimumCoverage?: string;
        apiVersion?: SearchApiVersion;
        suggesterName?: string;
    };
    type Parameters = {
        searchParameters: SearchParameters;
        suggestionsParameters: SuggestionsParameters;
        input: string;
    };
    type SearchResults = {
        count: number;
        isFetching: boolean;
        lastUpdated: number;
        resultsProcessor?: (results: {}[]) => {}[];
        results: {}[];
    };
    type Suggestions = {
        isFetching: boolean;
        lastUpdated: number;
        suggestionsProcessor?: (suggestions: {}[]) => {}[];
        suggestions: {}[];
    };
    type CheckboxFacetItem = {
        value: string | number;
        count: number;
        selected: boolean;
    };
    type FacetSortingMode = "count" | "count-" | "value" | "value-";
    type RangeDataType = "number" | "date";
    type RangeFacet = {
        type: "RangeFacet";
        dataType: RangeDataType;
        key: string;
        min: number | Date;
        max: number | Date;
        filterLowerBound: number | Date;
        filterUpperBound: number | Date;
        lowerBucketCount: number;
        middleBucketCount: number;
        upperBucketCount: number;
        facetClause: string;
        filterClause: string;
    };
    type CheckboxDataType = "number" | "string" | "collection";
    type CheckboxFacet = {
        type: "CheckboxFacet";
        dataType: CheckboxDataType;
        key: string;
        values: {
            [key: string]: CheckboxFacetItem;
        };
        count: number;
        sort: FacetSortingMode;
        facetClause: string;
        filterClause: string;
    };
    type FacetResult = {
        count: number;
        value?: string | number;
        from?: number;
        to?: number;
    };
    type FacetMode = "simple" | "advanced";
    type Facets = {
        facetMode: FacetMode;
        globalFilters: {
            [key: string]: string;
        };
        facets: {
            [key: string]: Facet;
        };
    };
    type Facet = RangeFacet | CheckboxFacet;
    type SearchState = {
        config: Config;
        results: SearchResults;
        suggestions: Suggestions;
        facets: Facets;
        parameters: Parameters;
    };
}
