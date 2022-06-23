import { useState } from "react";


export function Student(){

    let [student,setStudent]=useState({
        'studId':0,
        'studName':'',
        'studStandard':""
    });

    function updateStudent(event){
        console.log(event.target.name);
        console.log(event.target.value);
        setStudent(currentObj=>{
               return {...currentObj, [event.target.name]:event.target.value}
        });
    }
    return(
        <div>
            <h2>Student Input Form</h2>
        <form>
            <label>Enter Id:</label>
            <input type="number" name="studId" value={student.studId} onChange={updateStudent}></input> <br></br>
            <label>Enter Name:</label>
            <input type="text"  name="studName" value={student.studName} onChange={updateStudent}></input> <br></br>
            <label>Enter Standard:</label>
            <input type="text" name="studStandard" value={student.studStandard} onChange={updateStudent}></input> <br></br>
            <input type="submit" value="Register"></input>
            <input type="reset"></input>
        </form>
        <div>
            <h2>Student Details are:</h2>
            <ul>
                <li>Id: {student.studId}</li>
                <li>Name: {student.studName}</li>
                <li>Standard: {student.studStandard}</li>
            </ul>
        </div>
        </div>    
    );
}

/* 
function test(){
    let array=[34,56,78];
    let array1=array;  // no copy
     let array2=[...array];
     let sample={
        'id':101,
        'sname':'samplename'
     }
     let sample1=sample; //no copy
     let sample2 ={...sample, [sname]:'hari'}
} */