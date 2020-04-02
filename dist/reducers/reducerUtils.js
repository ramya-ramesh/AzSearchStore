"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var objectAssign = require("object-assign");
function updateObject(oldObject, newValues) {
    return objectAssign({}, oldObject, newValues);
}
exports.updateObject = updateObject;
function updateObjectAtKey(oldObject, entry, key) {
    var newObject = {};
    newObject[key] = entry;
    return updateObject(oldObject, newObject);
}
exports.updateObjectAtKey = updateObjectAtKey;
// todo(evboyle): create reducer util
//# sourceMappingURL=reducerUtils.js.map