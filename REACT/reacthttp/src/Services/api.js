import axios from "axios";

const url="http://127.0.0.1:3001/user"


export let getAllUser=async ()=>{
 return await axios.get(url);        // get request to json server
}

export let deleteUser=async(id)=>{
    return await axios.delete(`${url}/${id}`);
}