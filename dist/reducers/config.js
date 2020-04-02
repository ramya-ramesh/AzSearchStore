"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var reducerUtils_1 = require("./reducerUtils");
exports.initialState = {
    index: "",
    queryKey: "",
    service: ""
};
function config(state, action) {
    if (state === void 0) { state = exports.initialState; }
    switch (action.type) {
        case "SET_CONFIG":
            return action.config;
        case "SET_SEARCH_CALLBACK":
            return reducerUtils_1.updateObject(state, { searchCallback: action.searchCallback });
        case "SET_SUGGEST_CALLBACK":
            return reducerUtils_1.updateObject(state, { suggestCallback: action.suggestCallback });
        default:
            return state;
    }
}
exports.config = config;
;
//# sourceMappingURL=config.js.map