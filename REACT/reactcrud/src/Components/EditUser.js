import  { useEffect, useState } from 'react';
import { editUser, getallUsers } from '../Service/api';
import { useParams } from 'react-router-dom';

export function EditUser(){
    let  { uid } = useParams();
    let [user,setUser]=useState({
        'id':uid,
        'name': "",
        'username' : "",
        'email': "",
        'phone': "",
    });
    let  loadUserData = async () =>{
        const response = await getallUsers(uid);
        setUser(response.data);
    }
    useEffect(() => {
        console.log(uid);
        loadUserData();
    },[loadUserData]);

   

    function updateUser(event){
        setUser(currentObj=>{
               return {...currentObj, [event.target.name]:event.target.value}
        });
    }
    let  editUserDetails = async (e) =>{
        console.log("hi");
        e.preventDefault();
       await editUser(uid,user);
      // history.push('/all');
    }

    return(
        <div>
            <h2>User Update Form</h2>
        <form onSubmit={editUserDetails}>
            <label>Enter name:</label>
            <input type="text" name="name" value={user.name} onChange={updateUser}></input> <br></br>
            <label>Enter Username:</label>
            <input type="text"  name="username" value={user.username} onChange={updateUser}></input> <br></br>
            <label>Enter Email:</label>
            <input type="text" name="email" value={user.email} onChange={updateUser}></input> <br></br>
            <label>Enter Phone:</label>
            <input type="text" name="phone" value={user.phone} onChange={updateUser}></input> <br></br>      
            <input type="submit" value="Update"></input>
            <input type="reset"></input>
        </form>
        </div>    
    );
}
export default EditUser;