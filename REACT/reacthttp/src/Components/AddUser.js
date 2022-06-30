import {useState } from "react";
import  {useNavigate} from 'react-router-dom';
import { addUser } from "../Services/api";

export function AddUser(){
    let navigate=useNavigate();
    let [user,setUser]=useState({
        "id":0,
        "name": "",
        "username": "",
        "email": "",
        "phone": ""
    });
   
    function updateU(event){
        console.log(event.target.name);
        console.log(event.target.value);
        setUser(currentObj=>{
               return {...currentObj, [event.target.name]:event.target.value}
        });
    }
    let addU= async(e)=>{
        e.preventDefault();
        await addUser(user);
        navigate('/allusers');
    }
    return(
        <div>
            <h2>User Register Form</h2>
        <form onSubmit={addU}>
            <label>Enter Id:</label>
            <input type="number"  name="id" value={user.id} onChange={updateU}></input> <br></br>
            <label>Enter Name:</label>
            <input type="text"  name="name" value={user.name} onChange={updateU}></input> <br></br>
            <label>Enter username:</label>
            <input type="text" name="username" value={user.username} onChange={updateU}></input> <br></br>
            <label>Enter email:</label>
            <input type="email"  name="email" value={user.email} onChange={updateU}></input> <br></br>
            <label>Enter Phone:</label>
            <input type="text" name="phone" value={user.phone} onChange={updateU}></input> <br></br>
            <input type="submit" value="ADD"></input>
            <input type="reset"></input>
        </form>
        <div>
            <h2>User Details are:</h2>
            <ul>
            <li>name: {user.id}</li>
                <li>name: {user.name}</li>
                <li>username: {user.username}</li>
                <li>email: {user.email}</li>
                <li>phone: {user.phone}</li>
            </ul>
        </div>
        </div>    
    );
} 