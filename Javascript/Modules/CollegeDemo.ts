
import {collegName, getCollege,changeCollege as setCollege} from './MyModule/College';
import dname from './MyModule/College';

import * as dept from './MyModule/Department';
console.log(collegName);
//collegName="LT";   // can not update the values of properties imported from module

setCollege("LT");
let newname=getCollege();
console.log(newname);
console.log(dname);

let dobj=new dept.Deparment();
let libobje=new dept.Library();

