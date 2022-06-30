import { Link } from "react-router-dom";


export function Navbar(){

    return (
        <nav>
            <Link to="/allusers">show users</Link>
            <Link to="/add">Register</Link>
        </nav>
    );
}