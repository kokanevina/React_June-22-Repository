

/* int a, : statically typed  language */
/* script : dyanamically typed language
var name;  
let, const*/

var companyName="Neosoft";
console.log(companyName);
console.log(typeof companyName);
companyName=45667;
console.log(companyName);
console.log(typeof companyName);
companyName=true;
console.log(companyName);
console.log(typeof companyName);
var companyName="Squad";  // var variables : can be redeclared
let branchLocation="Rabale";
branchLocation="Rabale";
//let branchLocation="Dadar"; // let variable : can not be redeclared
function difference(){
    var age=67;
    if(age>=18){
        console.log("You are allowed for voting");
        var voterId=786556767;
        let userName="Hari";
    } // ended
    else{
        console.log("You are not allowed for voting");
    }
    // var variables : always have functional scope though u declare them anywhere in  function
    console.log(voterId); 
     // let  variables : have block scope where they are declared
    //console.log(userName); 
}
difference();
function add(no1,no2){
   console.log(no1+no2) 
}
add(67,78);
function sub(no1,no2){
    return no1-no2;
}
let res=sub(89,4);
console.log(res);
/*annonymous functions */
let cubeFun=function(num){
    console.log(num*num*num);
}
cubeFun(7);
/*arrow functions : no name, no function keyword , => () between and {} */
let arrowFun1=(num)=>{
    console.log(num*num*num);
}
arrowFun1(8);
/* if arrow function have single stmt in the body then {} are optional
if arrow function takes single argument the () are optional */
let arrowFun2=num=>console.log(num*num*num)
arrowFun2(9);
/* if it is single return stmt then {} optional but return keyword not allowed
result will be returned automatically */
let arrowFun3=num=>num*num*num
let cube=arrowFun3(13);
console.log(cube);

const salary=67890;
//salary=5667; : can not reassign the value for constat variable