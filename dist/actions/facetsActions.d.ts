import { Store } from "../store";
export declare type FacetsAction = AddRangeFacetAction | AddCheckboxFacetAction | ToggleCheckboxFacetAction | SetFacetRangeAction | SetFacetModeAction | SetFacetsValuesAction | UpdateFacetValuesAction | ClearFacetsSelectionsAction | SetGlobalFilterAction;
export declare type ClearFacetsSelectionsAction = {
    type: "CLEAR_FACETS_SELECTIONS";
};
export declare type UpdateFacetValuesAction = {
    type: "UPDATE_FACETS_VALUES";
    facets: {
        [key: string]: Store.FacetResult[];
    };
};
export declare type SetFacetsValuesAction = {
    type: "SET_FACETS_VALUES";
    facets: {
        [key: string]: Store.FacetResult[];
    };
};
export declare type SetFacetModeAction = {
    type: "SET_FACET_MODE";
    facetMode: Store.FacetMode;
};
export declare type AddRangeFacetAction = {
    type: "ADD_RANGE_FACET";
    dataType: Store.RangeDataType;
    key: string;
    min: number | Date;
    max: number | Date;
};
export declare type AddCheckboxFacetAction = {
    type: "ADD_CHECKBOX_FACET";
    key: string;
    dataType: Store.CheckboxDataType;
    count: number;
    sort: Store.FacetSortingMode;
};
export declare type ToggleCheckboxFacetAction = {
    type: "TOGGLE_CHECKBOX_SELECTION";
    key: string;
    value: string | number;
};
export declare type SetFacetRangeAction = {
    type: "SET_FACET_RANGE";
    key: string;
    lowerBound: number | Date;
    upperBound: number | Date;
};
export declare type SetGlobalFilterAction = {
    type: "SET_GLOBAL_FILTER";
    key: string;
    filter: string;
};
export declare const setFacetsValues: (facets: {
    [key: string]: Store.FacetResult[];
}) => FacetsAction;
export declare const updateFacetsValues: (facets: {
    [key: string]: Store.FacetResult[];
}) => FacetsAction;
export declare const addCheckboxFacet: (key: string, dataType: Store.CheckboxDataType, count?: number, sort?: Store.FacetSortingMode) => FacetsAction;
export declare const addRangeFacet: (key: string, dataType: Store.RangeDataType, min: number | Date, max: number | Date) => FacetsAction;
export declare const setFacetMode: (facetMode: Store.FacetMode) => FacetsAction;
export declare const toggleCheckboxFacetSelection: (key: string, value: string | number) => FacetsAction;
export declare const setFacetRange: (key: string, lowerBound: number | Date, upperBound: number | Date) => FacetsAction;
export declare const clearFacetsSelections: () => FacetsAction;
export declare const setGlobalFilter: (key: string, filter: string) => FacetsAction;
