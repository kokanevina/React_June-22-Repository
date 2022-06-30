 import { useEffect, useState } from "react";
import  {useParams,useNavigate} from 'react-router-dom';
import { getUser } from "../Services/api";
import { updateUser } from "../Services/api";
export function UpdateUser(){
    let navigate=useNavigate();
    let [user,setUser]=useState({
        "id":0,
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
        let response= await getUser(uid);
        setUser(response.data);
    }

    function updateU(event){
        console.log(event.target.name);
        console.log(event.target.value);
        setUser(currentObj=>{
               return {...currentObj, [event.target.name]:event.target.value}
        });
    }

    let editUser= async (e)=>{
        e.preventDefault();
        await updateUser(uid,user);
        navigate("/allusers");
    }
    return(
        <div>
            <h2>User Update Form</h2>
        <form onSubmit={editUser}>
            <label>Enter Name:</label>
            <input type="text"  name="name" value={user.name} onChange={updateU}></input> <br></br>
            <label>Enter username:</label>
            <input type="text" name="username" value={user.username} onChange={updateU}></input> <br></br>
            <label>Enter email:</label>
            <input type="email"  name="email" value={user.email} onChange={updateU}></input> <br></br>
            <label>Enter Phone:</label>
            <input type="text" name="phone" value={user.phone} onChange={updateU}></input> <br></br>
            <input type="submit" value="UPDATE"></input>
            <input type="reset"></input>
        </form>
        <div>
            <h2>User Details are:</h2>
            <ul>
                <li>id:{uid}</li>
                <li>name: {user.name}</li>
                <li>username: {user.username}</li>
                <li>email: {user.email}</li>
                <li>phone: {user.phone}</li>
            </ul>
        </div>
        </div>    
    );
} 