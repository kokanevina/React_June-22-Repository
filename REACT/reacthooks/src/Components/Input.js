/*Contrlled Components : input fields are controlled by the components
use hooks  */
import { useState } from "react";
export function Input1(){
    let [companyName1,setCompany]= useState("Squad");
    function assign(e){
        console.log(e.target.value);
        //companyName=e.target.value;
        setCompany(e.target.value);
    }
    return(
        <div>
            <label>Enter company name:</label>
            <input type="text" defaultValue={companyName1} onBlur={assign}></input>         
            <p>
                <b>Company Name is {companyName1}</b>
            </p>
        </div>
    );
}
export function Input2(){
    let [companyName,setCompany]= useState("Squad");
    function assign(e){
        console.log(e.target.value);
        //companyName=e.target.value;
        setCompany(e.target.value);
    }
    return(
        <div>
            <label>Enter company name:</label>
             <input type="text" value={companyName} onChange={assign}></input>       
            <p>
                <b>Company Name is {companyName}</b>
            </p>
        </div>
    );
}


export function Input3(){
    let [companyName2,setCompany]= useState("Squad");
    return(
        <div>
            <label>Enter company name:</label>
            <input type="text" value={companyName2} onChange={(e)=>setCompany(e.target.value)}></input>         
            <p>
                <b>Company Name is {companyName2}</b>
            </p>
        </div>
    );
}

/* 
function JS(){
    let array=[45,68,234];
    let array1 =[34,'hairi',true, 67,89,'Poonam', function(){}];

    let empArray=[123,'hari',67889.67];
    let id=empArray[0];
    let name=empArray[1];
    let salray=empArray[2];
    // array destructuring

    let [id1,name1,salary1]=empArray;

} */