 import { useEffect, useState } from "react";
import  {useParams} from 'react-router-dom';
import { getUser } from "../Services/api";
export function UpdateUser(){
    let [user,setUser]=useState({
        "id": 0,
        "name": "",
        "username": "",
        "email": "",
        "phone": ""
    });
    let {uid}=useParams();
    useEffect(()=>{
        getU();
    },[]);

    let getU=async ()=>{
        let searchedUser= await getUser(uid);
        setUser(searchedUser.data);
    }

    function updateUser(event){
        console.log(event.target.name);
        console.log(event.target.value);
        setUser(currentObj=>{
               return {...currentObj, [event.target.name]:event.target.value}
        });
    }
    return(
        <div>
            <h2>User Update Form</h2>
        <form>
            <label>Enter Name:</label>
            <input type="text"  name="name" value={user.name} onChange={updateUser}></input> <br></br>
            <label>Enter username:</label>
            <input type="text" name="username" value={user.username} onChange={updateUser}></input> <br></br>
            <label>Enter email:</label>
            <input type="email"  name="email" value={user.email} onChange={updateUser}></input> <br></br>
            <label>Enter Phone:</label>
            <input type="text" name="phone" value={user.phone} onChange={updateUser}></input> <br></br>
            <input type="submit" value="Register"></input>
            <input type="reset"></input>
        </form>
        <div>
            <h2>User Details are:</h2>
            <ul>
                <li>id:{uid}</li>
                <li>name: {user.name}</li>
                <li>username: {user.username}</li>
                <li>email: {user.email}</li>
            </ul>
        </div>
        </div>    
    );
} 