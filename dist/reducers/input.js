"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initialState = "*";
function input(state, action) {
    if (state === void 0) { state = exports.initialState; }
    switch (action.type) {
        case "SET_INPUT":
            return action.input;
        default:
            return state;
    }
}
exports.input = input;
//# sourceMappingURL=input.js.map