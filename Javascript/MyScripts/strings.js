let s1="Neosoft Technologies";
let s2=new String("NeoSOft");
console.log(s1.length);
console.log(s1.charAt(3));
console.log((s1.indexOf('o')));
console.log((s1.lastIndexOf('o')));
let empNames=["Poonam","Atul","Amol","Kruti","Avni","Amit"];
// Find employees starting with "A"
empNames.filter(name=>name.startsWith("A")).forEach(el=>console.log(el));
// Find employees starting with "i"
empNames.filter(name=>name.endsWith("i")).forEach(el=>console.log(el));
let ss=s1.toUpperCase();
console.log(ss);
console.log(s1);  // immutable
console.log(s2.toLowerCase());
console.log(s2);
empNames=["Poonam","Atul","Amol","Kruti","Avni","Amit", 'arun','komal','aashish'];
// Find employees starting with "A"/"a"
empNames.filter(name=>name.toUpperCase().startsWith("A")).forEach(el=>console.log(el));
let i1="     India    ";
let i2="India   ";
console.log(i1.trim()==i2.trim());
let i3="    india    ";
let i4="India   ";
console.log(i3.trim().toLowerCase()==i4.trim().toLowerCase());

let s="India is my country";
document.write(s.substring(2,10));
document.write("<br>");
document.write(s.slice(2,10));
document.write("<br>");
document.write(s.substring(2));
document.write("<br>");
document.write(s.slice(2));
document.write("<br>");
document.write(s.substring(10,2)); // si : 2, ei : 10
document.write("<br>");
document.write(s.slice(10,2));  // si:10, ei: 2: empty
document.write("<br>");
document.write(s.substring(-12,-2)); // no support to -ve : replaced with 0 0,0 : empty string
document.write("<br>");
document.write(s.slice(-12,-2)); // slice counts (starts with 1) characters from end of the string
document.write("<br>");   /*s,  t*/
document.write(s.substring(-12)); //0 : whole string
document.write("<br>");
document.write(s.slice(-12));  // start from s ends at end of the string
document.write("<br>");
document.write(s.substring(-12, 5));  //0,5
document.write("<br>");
document.write(s.slice(-12, 5));  //s, space : empty string
document.write("<br>"); 
/*  - -, - +, + +, + - : si<ei */
document.write(s.slice(-12, 10)); 
document.write("<br>"); 

// substr:  si, length -ve