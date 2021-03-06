import axios from "axios";

const url="http://127.0.0.1:3001/users"


export let getAllUser=async ()=>{
 return await axios.get(url);        // get request to json server
}

export let getUser=async (id)=>{
    return await axios.get(`${url}/${id}`);        // get request to json server
   }
export let deleteUser=async(id)=>{
    return await axios.delete(`${url}/${id}`);
}
export let updateUser=async(id,user)=>{
    await axios.put(`${url}/${id}`,user);
}
export let addUser=async(user)=>{
    await axios.post(url,user);
}