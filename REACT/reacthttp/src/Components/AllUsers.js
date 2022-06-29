import { useEffect,useState } from "react";
import { getAllUser } from "../Services/api";


export function AllUsers(){
    let [users, setUsers]=useState([]);

    useEffect(()=>{
        getUsers();
    },[]);

    let getUsers=async ()=>{
        let response=   await getAllUser();
        setUsers(response.data);
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
                    </tr> 
                )
            }
            </tbody>
        </table>
    );
}