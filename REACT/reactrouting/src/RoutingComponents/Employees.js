import { empArray } from "../Data/EmpInfo";



export function Employees(){
    return (
        <table border="3">
            <thead>
                <th>ID</th><th>NAME</th><th>BASIC SALARY</th>
            </thead>
            <tbody>
                {
                    empArray.map(emp=>{
                        return (<tr><td>{emp.id}</td><td>{emp.ename}</td><td>{emp.basicSalary}</td></tr>)
                    })
                }
            </tbody>
        </table>
    );
}