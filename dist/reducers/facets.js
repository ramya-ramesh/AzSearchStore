"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var reducerUtils_1 = require("./reducerUtils");
exports.initialState = {
    facetMode: "simple",
    globalFilters: {},
    facets: {}
};
var odataString = "@odata";
function facets(state, action) {
    if (state === void 0) { state = exports.initialState; }
    switch (action.type) {
        case "SET_FACET_MODE": return setFacetMode(state, action);
        case "ADD_RANGE_FACET": return addRangeFacetAction(state, action);
        case "ADD_CHECKBOX_FACET": return addCheckboxFacet(state, action);
        case "TOGGLE_CHECKBOX_SELECTION": return toggleFacetSelection(state, action);
        case "SET_FACET_RANGE": return setFacetRange(state, action);
        case "SET_FACETS_VALUES": return setFacetsValues(state, action);
        case "UPDATE_FACETS_VALUES": return updateFacetsValues(state, action);
        case "CLEAR_FACETS_SELECTIONS": return clearFacetsSelections(state, action);
        case "SET_GLOBAL_FILTER": return setGlobalFilter(state, action);
        default:
            return state;
    }
}
exports.facets = facets;
function setGlobalFilter(state, action) {
    var filter = action.filter, key = action.key;
    var globalFilters = reducerUtils_1.updateObjectAtKey(state.globalFilters, filter, key);
    return reducerUtils_1.updateObject(state, { globalFilters: globalFilters });
}
function clearFacetsSelections(state, action) {
    var facets = {};
    Object.keys(state.facets).forEach(function (key) {
        var facet = state.facets[key];
        switch (facet.type) {
            case "CheckboxFacet":
                var values_1 = {};
                Object.keys(facet.values).forEach(function (value) {
                    var currentItem = facet.values[value];
                    var item = reducerUtils_1.updateObject(currentItem, { selected: false, count: 0 });
                    values_1[value] = item;
                });
                facets[key] = reducerUtils_1.updateObject(facet, { values: values_1, filterClause: "" });
                break;
            case "RangeFacet":
                facets[key] = reducerUtils_1.updateObject(facet, {
                    filterLowerBound: facet.min,
                    filterUpperBound: facet.max,
                    lowerBucketCount: 0,
                    middleBucketCount: 0,
                    upperBucketCount: 0,
                    filterClause: ""
                });
                break;
            default: break;
        }
    });
    return reducerUtils_1.updateObject(state, { facets: facets });
}
function setFacetsValues(state, action) {
    var facets = {};
    var keysToUpdate = Object.keys(action.facets).filter(function (key) {
        var facet = state.facets[key];
        return facet;
    });
    keysToUpdate.forEach(function (key) {
        var facet = state.facets[key];
        var facetResults = action.facets[key];
        switch (facet.type) {
            case "CheckboxFacet":
                facets[key] = setCheckboxFacetValues(facet, facetResults);
                break;
            case "RangeFacet":
                facets[key] = setRangeFacetValues(facet, facetResults);
                break;
            default: break;
        }
    });
    return reducerUtils_1.updateObject(state, { facets: facets });
}
function setRangeFacetValues(facet, facetResults) {
    return reducerUtils_1.updateObject(facet, {
        filterLowerBound: facet.min,
        filterUpperBound: facet.max,
        lowerBucketCount: 0,
        upperBucketCount: 0,
        middleBucketCount: facetResults[1].count,
        filterClause: ""
    });
}
function setCheckboxFacetValues(facet, facetResults) {
    var values = {};
    facetResults.forEach(function (facetResult) {
        var value = facetResult.value, count = facetResult.count;
        values[value] = {
            value: value,
            count: count,
            selected: false
        };
    });
    return reducerUtils_1.updateObject(facet, { values: values, filterClause: "" });
}
function updateFacetsValues(state, action) {
    var updatedFacets = {};
    // filter out @odata type annotations
    var keys = Object.keys(action.facets).filter(function (key) { return key.toLowerCase().indexOf(odataString) < 0; });
    keys.forEach(function (key) {
        var facet = state.facets[key];
        var currentItem = action.facets[key];
        switch (facet.type) {
            case "RangeFacet":
                updatedFacets[key] = reducerUtils_1.updateObject(facet, {
                    lowerBucketCount: currentItem[0].count,
                    middleBucketCount: currentItem[1].count,
                    upperBucketCount: currentItem[2].count
                });
                break;
            case "CheckboxFacet":
                // set counts for values that got updates
                var checkboxFacet = facet;
                var hasSelection = facet.filterClause.length > 0;
                var updatedFacet = hasSelection ? mergeCheckboxFacetValues(checkboxFacet, currentItem) : setCheckboxFacetValues(checkboxFacet, currentItem);
                updatedFacets[key] = updatedFacet;
                break;
            default: break;
        }
    });
    var facets = reducerUtils_1.updateObject(state.facets, updatedFacets);
    return reducerUtils_1.updateObject(state, { facets: facets });
}
function mergeCheckboxFacetValues(facet, facetResults) {
    var values = {};
    var currentItemKeys = facetResults.map(function (item) { return item.value.toString(); });
    Object.keys(facet.values).forEach(function (valueKey) {
        // do we have an update for the current key
        var updateIndex = currentItemKeys.indexOf(valueKey);
        if (updateIndex >= 0) {
            var item = facetResults[updateIndex];
            values[valueKey] = {
                count: item.count,
                value: item.value,
                selected: facet.values[item.value] ? facet.values[item.value].selected : false
            };
        }
        else {
            var value = facet.values[valueKey];
            values[valueKey] = {
                count: 0,
                selected: value.selected,
                value: value.value
            };
        }
    });
    // fill in new values at the end
    facetResults.forEach(function (item) {
        if (!values[item.value]) {
            values[item.value] = {
                count: item.count,
                value: item.value,
                selected: facet.values[item.value] ? facet.values[item.value].selected : false
            };
        }
    });
    return reducerUtils_1.updateObject(facet, { values: values });
}
function setFacetMode(state, action) {
    var facetMode = action.facetMode;
    return reducerUtils_1.updateObject(state, { facetMode: facetMode });
}
function getRangeFacetClause(dataType, key, filterLowerBound, filterUpperBound) {
    var lowerClause;
    var upperClause;
    switch (dataType) {
        case "number":
            lowerClause = filterLowerBound;
            upperClause = filterUpperBound;
            break;
        case "date":
            lowerClause = filterLowerBound.toISOString();
            upperClause = filterUpperBound.toISOString();
            break;
        default:
            break;
    }
    return key + ",values:" + lowerClause + "|" + upperClause;
}
function addRangeFacetAction(state, action) {
    var key = action.key, min = action.min, max = action.max, dataType = action.dataType;
    switch (dataType) {
        case "number":
        case "date":
            break;
        default:
            throw new Error("dataType of RangeFacet must be 'number' | 'date'");
    }
    var filterLowerBound = min, filterUpperBound = max;
    var rangeFacet = {
        type: "RangeFacet",
        dataType: dataType,
        key: key,
        min: min,
        max: max,
        filterLowerBound: min,
        filterUpperBound: max,
        lowerBucketCount: 0,
        middleBucketCount: 0,
        upperBucketCount: 0,
        filterClause: "",
        facetClause: getRangeFacetClause(dataType, key, filterLowerBound, filterUpperBound)
    };
    var facets = reducerUtils_1.updateObjectAtKey(state.facets, rangeFacet, key);
    return reducerUtils_1.updateObject(state, { facets: facets });
}
function addCheckboxFacet(state, action) {
    var dataType = action.dataType, key = action.key;
    var sort = "count", count = 5;
    switch (dataType) {
        case "number":
        case "collection":
        case "string":
            break;
        default:
            throw new Error("dataType of CheckboxFacet must be 'number' | 'collection' | 'string'");
    }
    var checkFacet = {
        type: "CheckboxFacet",
        key: key,
        dataType: dataType,
        values: {},
        count: count,
        sort: sort,
        filterClause: "",
        facetClause: key + ",count:" + count + ",sort:" + sort
    };
    var facets = reducerUtils_1.updateObjectAtKey(state.facets, checkFacet, key);
    return reducerUtils_1.updateObject(state, { facets: facets });
}
function toggleFacetSelection(state, action) {
    var key = action.key, value = action.value;
    var existingFacet = state.facets[key];
    if (existingFacet.type !== "CheckboxFacet") {
        throw new Error("TOGGLE_CHECKBOX_SELECTION must be called on facet of type 'CheckboxFacet', actual: " + existingFacet.type);
    }
    var checkboxFacet = existingFacet;
    var oldFacetItem = checkboxFacet.values[value];
    var updatedFacetItem = reducerUtils_1.updateObject(oldFacetItem, { selected: !oldFacetItem.selected });
    var newValue = {};
    var values = reducerUtils_1.updateObjectAtKey(checkboxFacet.values, updatedFacetItem, value.toString());
    var newFacet = reducerUtils_1.updateObject(checkboxFacet, { values: values });
    var filterClause = buildCheckboxFilter(newFacet);
    var newFacetWithFilter = reducerUtils_1.updateObject(newFacet, { filterClause: filterClause });
    var facets = reducerUtils_1.updateObjectAtKey(state.facets, newFacetWithFilter, key);
    return reducerUtils_1.updateObject(state, { facets: facets });
}
function setFacetRange(state, action) {
    var key = action.key, lowerBound = action.lowerBound, upperBound = action.upperBound;
    var existingFacet = state.facets[key];
    if (existingFacet.type !== "RangeFacet") {
        throw new Error("SET_FACET_RANGE must be called on facet of type 'RangeFacet', actual: " + existingFacet.type);
    }
    var existingRangeFacet = existingFacet;
    var newRangeFacet = reducerUtils_1.updateObject(existingRangeFacet, { filterLowerBound: lowerBound, filterUpperBound: upperBound });
    var filter = buildRangeFilter(newRangeFacet);
    var facetClause = getRangeFacetClause(newRangeFacet.dataType, newRangeFacet.key, lowerBound, upperBound);
    var newFacetWithFilter = reducerUtils_1.updateObject(newRangeFacet, { filterClause: filter, facetClause: facetClause });
    var facets = reducerUtils_1.updateObjectAtKey(state.facets, newFacetWithFilter, key);
    return reducerUtils_1.updateObject(state, { facets: facets });
}
function buildCheckboxFilter(facet) {
    var selectedFacets = Object.keys(facet.values).filter(function (value) {
        return facet.values[value].selected;
    });
    var clauses = selectedFacets.map(function (selectedValue) {
        var clause;
        switch (facet.dataType) {
            case "number":
                clause = facet.key + " eq " + facet.values[selectedValue].value;
                break;
            case "string":
                clause = facet.key + " eq '" + facet.values[selectedValue].value + "'";
                break;
            case "collection":
                clause = facet.key + "/any(t: t eq '" + facet.values[selectedValue].value + "')";
                break;
            default:
                clause = "";
                break;
        }
        return clause;
    });
    var filter = clauses.join(" or ");
    filter.length ? filter = "(" + filter + ")" : filter = "";
    return filter;
}
function buildRangeFilter(facet) {
    var lowerFilter;
    var upperFilter;
    switch (facet.dataType) {
        case "number":
            lowerFilter = facet.filterLowerBound;
            upperFilter = facet.filterUpperBound;
            break;
        case "date":
            lowerFilter = facet.filterLowerBound.toISOString();
            upperFilter = facet.filterUpperBound.toISOString();
            break;
        default:
            break;
    }
    if (facet.min === facet.filterLowerBound && facet.max === facet.filterUpperBound) {
        return "";
    }
    if (facet.min === facet.filterLowerBound) {
        return facet.key + " le " + upperFilter;
    }
    if (facet.max === facet.filterUpperBound) {
        return facet.key + " ge " + lowerFilter;
    }
    return facet.key + " ge " + lowerFilter + " and " + facet.key + " le " + upperFilter;
}
//# sourceMappingURL=facets.js.map