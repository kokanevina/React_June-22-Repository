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