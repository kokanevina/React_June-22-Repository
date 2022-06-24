
import './Navbar.css';
import { Link } from 'react-router-dom';
export function Navbar(){
    return (
    <nav className="navbar">
        <ol>
            <li><Link to="home">HOME</Link></li>
            <li><Link to="login">LOGIN</Link></li>
            <li><Link to="employees">EMPLOYEES</Link></li>
        </ol>      
    </nav>
    );
}