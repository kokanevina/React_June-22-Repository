let fnameNode=document.getElementById('fname');
let errorNode1=document.getElementById('error1');
let unameNode=document.getElementById('uname');
let errorNode2=document.getElementById('error2');
let passNode=document.getElementById('pass');
let errorNode3=document.getElementById('error3');
function validate1(){
    let fanme=fnameNode.value;
    errorNode1.innerHTML="";
    if(fanme==''){
       errorNode1.innerHTML="First name is required";
       fnameNode.style.border="2px solid red";
    }
    else{
        fnameNode.style.border="2px solid green";
    }
}
function validate2(){
    let uname=unameNode.value;
    errorNode2.innerHTML="";
    if(uname==''){
       errorNode2.innerHTML="Username is required";
       unameNode.style.border="2px solid red";
    }
    else if(uname.length<4 || uname.length>9){
        errorNode2.innerHTML="Username should be minimum 4 characters and maximum 9 characters long";
        unameNode.style.border="2px solid red";
    }
    else{
        unameNode.style.border="2px solid green";
    }
}
function validate3(){
    let password=passNode.value;
    errorNode3.innerHTML="";  
    let reqExp=new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,12})");
    console.log(reqExp.test(password));
    if(password==''){
       errorNode3.innerHTML="Password is required";
       passNode.style.border="2px solid red";
    }
    else if(reqExp.test(password)==false){
        errorNode3.innerHTML="Password should have atleast one 1.  capital letter "+
        "2.  small letter 3.  digit 4. special symbol"+
        "password should be 6 to 12 characters long";
        passNode.style.border="2px solid red";
    }
    else{
        passNode.style.border="2px solid green";
    }
}

