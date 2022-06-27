import { empArray } from "../Data/EmpInfo";
import { Link } from 'react-router-dom';


export function Employees(){
    return (
        <table border="3">
            <thead>
                <tr><th>ID</th><th>NAME</th><th>BASIC SALARY</th><th>ACTION</th></tr>      
            </thead>
            <tbody>
                {
                    empArray.map(emp=>{
                        return (<tr key={emp.id}><td>{emp.id}</td>
                        <td>{emp.ename}</td>
                        <td>{emp.basicSalary}</td>
                        <td><Link to={`/editemp/${emp.id}`}>edit</Link></td>
                        </tr>)
                    })
                }
            </tbody>
        </table>
    );
}