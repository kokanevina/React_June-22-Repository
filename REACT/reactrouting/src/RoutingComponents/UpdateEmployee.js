import { useEffect } from 'react';
import {useParams} from 'react-router-dom';
import { empArray } from '../Data/EmpInfo';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
export function UpdateEmployee(){
    let {eid}=useParams();
    let [empObj,setEmp]=useState({});
    let navigate=useNavigate();
    useEffect(()=>{  
        console.log(typeof eid);
        let found=empArray.find(emp=>emp.id===parseInt(eid));   
        setEmp(found);
    },[eid]); 

    function updateArray(event){
        // implement the logic same what we did in react forms
        console.log("in function");
        navigate("/employees");   
    }
    return (
        <div>
            <h2>Update Form</h2>
            <form onSubmit={updateArray}>
                <label>ID:</label><input type="number" value={empObj.id}  readOnly></input><br></br>
                <label>Name:</label><input type="text" value={empObj.ename}></input><br></br>
                <label>Basic Salary:</label><input type="number" value={empObj.basicSalary}></input><br></br>
                <input type="submit" value="UPDATE"></input>
            </form>
        </div>
    );
} 