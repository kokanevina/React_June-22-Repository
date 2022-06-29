import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
   
    return (
        <nav>
                <Link to="home" > React JS Crud</Link>
                <Link to="all" > All Users</Link>
               {/*  <Link to="add" > Add Users</Link> */}
        </nav>
    )
}

export default Navbar;