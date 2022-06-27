import './Login.css'
import { Link } from 'react-router-dom';
export function Login(){
    return (<>
        <div className="loginBlock">
            <form>
                <label>Enter Username</label>
                <input type="text" ></input><br></br>
                <label>Enter Password</label>
                <input type="password" ></input><br></br>
                <input type="submit"></input>
            </form>
        </div>
        <div>
           <span>New User? click  <Link to="/register">here </Link> to register </span>
        </div>
        </>
    )

}