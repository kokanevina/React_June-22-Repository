"use strict";
exports.__esModule = true;
var College_1 = require("./MyModule/College");
var College_2 = require("./MyModule/College");
var dept = require("./MyModule/Department");
console.log(College_1.collegName);
//collegName="LT";   // can not update the values of properties imported from module
(0, College_1.changeCollege)("LT");
var newname = (0, College_1.getCollege)();
console.log(newname);
console.log(College_2["default"]);
var dobj = new dept.Deparment();
dobj.deptId = 5677;
dobj.deptName = "CSE";
var libobje = new dept.Library();
libobje.libraryName = "Mahatma Phule Library";
