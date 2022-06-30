import { useEffect,useState } from "react";
import { getAllUser,deleteUser } from "../Services/api";
import { Link } from "react-router-dom";

export function AllUsers(){
    let [users, setUsers]=useState([]);

    useEffect(()=>{
        getUsers();
    },[]);

    let getUsers=async ()=>{
        let response=   await getAllUser();
        setUsers(response.data);
    }
   let deleteU=async(id)=>{
    let response=await deleteUser(id);
    console.log(response);
    getUsers();
   }
    return(
        <table border={3}>
            <thead>
                <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>USERNAME</th>
                <th>EMAILID</th>
                <th>PHONE</th>
                </tr>
            </thead>
            <tbody>
            {
                users.map((ele)=>
                    <tr key={ele.id}>
                        <td>{ele.id}</td><td>{ele.name}</td>
                        <td>{ele.username}</td><td>{ele.email}</td>
                        <td>{ele.phone}</td>
                        <td><button onClick={()=>deleteU(ele.id)}>DELETE</button></td>
                        <td><Link to={`/edituser/${ele.id}`}>EDIT</Link></td>
                    </tr> 
                )
            }
            </tbody>
        </table>
    );
}