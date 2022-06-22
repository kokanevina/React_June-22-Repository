import { useState } from "react";


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
        <div>
            <h2>Student Details are:</h2>
            <table border="2">
                <tbody>
                    {
                       studArray.map(stud=>{
                        return (<tr key={stud.studId}><td>{stud.studId}</td><td>{stud.studName}</td><td>{stud.studStandard}</td></tr>)
                       }) 
                    }
                </tbody>
            </table>
        </div>
        </div>    
    );
}

