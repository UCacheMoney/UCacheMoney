import "./page.css";

export default function login(){
    return( 
        <div className="login_page">
            <form>
                <center>
                <h1>Log In</h1>

                <label htmlFor="username">Username: </label><br></br>
                
                <input type="text" id="username" name="username"></input><br></br>
                
                <label htmlFor="password">Password: </label><br></br>
                
                <input type="text" id="password" name="password"></input><br></br>

                <input type="submit"></input>
                </center>
                
            </form>
        </div>
    );
    }
    