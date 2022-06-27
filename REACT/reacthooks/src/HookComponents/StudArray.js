import { useState } from "react";
import { StudDetails } from "./StudDetails";


export function StudArray(){
    let [studArray,setArray]=useState([]);
    
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
    function collect(event){       
        console.log("in collection function");
        event.preventDefault();
        setArray(currentArray=>{
                return [...currentArray,student]
        });
    }
    function test(){
        if(studArray.length>0)
        return <StudDetails studArray={studArray}></StudDetails>
    }
    return(
        <div>
            <h2>Student Input Form</h2>
        <form onSubmit={collect}>
            <label>Enter Id:</label>
            <input type="number" name="studId" value={student.studId} onChange={updateStudent}></input> <br></br>
            <label>Enter Name:</label>
            <input type="text"  name="studName" value={student.studName} onChange={updateStudent}></input> <br></br>
            <label>Enter Standard:</label>
            <input type="text" name="studStandard" value={student.studStandard} onChange={updateStudent}></input> <br></br>
            <input type="submit" value="Register"></input>
            <input type="reset"></input>
        </form>
        {test()}
          
        </div>    
    );
}

