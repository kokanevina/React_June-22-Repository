
let salaryArray=[78000,89000,76000,78000,98000,67000,34000];
// duplicate values are allowed
console.log(salaryArray);
console.log(salaryArray.length);
console.log("with normal for");
for (let i = 0; i < salaryArray.length; i++) {
   console.log(salaryArray[i]);
}
console.log("with for of");
for(let element of salaryArray){
    console.log(element);
}

// builtin methods : forEach : iterate,  
// find : finds the element : 1st matching element  : single value
// filter : finds the element : all matching element : array 
// map : transforms the elements : array
// reduce : n elements as input : single output   7 => 1
// growing, dynamic size

salaryArray.forEach((element,index, ref)=>{
    document.write(element+" "+index+" "+ref);
    document.write("<br>");
});
document.write("<hr>");
salaryArray.forEach(e=>document.write(e+" "));
salaryArray=[78000,89000,76000,78000,98000,67000,34000];
// searching salary>80000
let result=salaryArray.find(element=>element>80000);
document.write("<hr>");
document.write(result);
let result1=salaryArray.filter(element=>element>80000);
document.write("<hr>");
document.write(result1);
console.log("Filtered Array:");
salaryArray.filter(e=>e>80000).forEach(e=>console.log(e));
document.write("<hr>");
let mappedArray=salaryArray.map(e=>e+3000);
document.write(mappedArray);
document.write("<hr>");
salaryArray=[1,3,1,4,6,3,4];
/*acc=index 0 element of array, e = index 1 element of array
acc=1, e=2 acc=acc+e=1+3 acc=4+1 acc=5+4 */
let sum=salaryArray.reduce((acc,e)=>acc+e);
document.write(sum);
/*acc=50, e= index 0 element 
50+1=51 51+3=54*/
document.write("<hr>");
 sum=salaryArray.reduce((acc,e)=>acc+e, 50);
document.write(sum);




salaryArray.push(23399); // inserted from back
console.log(salaryArray);
salaryArray.pop(); // removed from back
console.log(salaryArray);

salaryArray.unshift(66666); // inserted from front
console.log(salaryArray);
salaryArray.shift(); // removed from front
console.log(salaryArray);

let nameArray=new Array(4); // initial size of the array
console.log(nameArray.length);
// array has 4 empty places
// how I fill first 4 empty places
for(var i=0;i<nameArray.length;i++){
    //nameArray[i]=window.prompt("Enter name to store"); // return string 
    nameArray[i]="Kirti";
}
nameArray.push("Poonam");
console.log(nameArray);
console.log(nameArray.length); 

console.log(salaryArray);  
let newref=salaryArray.reverse();  // arrays mutable
console.log(salaryArray);
console.log(newref);
newref.push(77777);
console.log(salaryArray);

let numArray=[67,2,456,34,1,78,45,123,12,89];
let cityArray=['Pune','Mumbai','Satara','Solapur','Khar','Punewale', 'pune'];
//cityArray.sort();
console.log(cityArray);
numArray.sort();
console.log(numArray);
numArray.sort((no1,no2)=>no1-no2);  /*123 12  123-12 = +ve 123>12*/ 
console.log(numArray);

let joined=cityArray.join("=>"); 
console.log(joined);

let sliceArray=cityArray.slice(1,4);
console.log(sliceArray);
 sliceArray=cityArray.slice(1);
console.log(sliceArray);
sliceArray=cityArray.slice(-4);
console.log(sliceArray);
/* let ageArray=new Array(5);
for(var i=0;i<ageArray.length;i++){
    ageArray[i]=parseInt(window.prompt("Enter age to store")); // return string 
}
console.log(ageArray); */