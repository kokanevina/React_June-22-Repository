"use strict";
// name of module= name of file (College)
exports.__esModule = true;
exports.changeCollege = exports.getCollege = exports.collegName = void 0;
var deparmentName = "CSE";
exports.collegName = "SGI";
function getCollege() {
    return exports.collegName;
}
exports.getCollege = getCollege;
function changeCollege(colname) {
    exports.collegName = colname;
}
exports.changeCollege = changeCollege;
exports["default"] = deparmentName;
