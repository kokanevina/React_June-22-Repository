import './Login.css'

export function Login(){
    return (
        <div className="loginBlock">
            <form>
                <label>Enter Username</label>
                <input type="text" ></input><br></br>
                <label>Enter Password</label>
                <input type="password" ></input><br></br>
                <input type="submit"></input>
            </form>
        </div>
    )

}