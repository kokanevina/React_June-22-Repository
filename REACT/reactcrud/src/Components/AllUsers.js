import React, { useEffect, useState } from 'react';
import { deleteUser ,getallUsers } from '../Service/api';
import { Link } from 'react-router-dom';


function AllUsers() {
    const [user, setUser] = useState([]);
    useEffect(() => {
        getUsers();
    }, [])

    const getUsers = async () =>{
        const response = await getallUsers();
        console.log(response);
        setUser(response.data);
    }

    const deleteData = async (id) => {
        await deleteUser(id);
        getUsers();
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>UserName</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
            {
                user.map((data) => (
                    <tr key={data.id}>
                        <td>{data.id}</td>
                        <td>{data.name}</td>
                        <td>{data.username}</td>
                        <td>{data.email}</td>
                        <td>{data.phone}</td>
                        <td>
                            <Link to={`/edit/${data.id}`}>EDIT</Link>
                            <button  style={{margin: '0px 20px'}} onClick={() => deleteData(data.id)}>DELETE</button>
                        </td>
                    </tr>
                ))
            }
            </tbody>
        </table>
    )
}

export default AllUsers;