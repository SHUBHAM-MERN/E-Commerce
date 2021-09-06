import React from 'react'
import { useState } from 'react';
import { Link,useHistory } from 'react-router-dom';
import "./login.css"

function Login() {
    const history = useHistory();
    const [username, setUsername] = useState();
    const [password, setpassword] = useState();
    const chnagedetail = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        if (name == "UserName") {
            setUsername(value)
        }
        else {
            setpassword(value)
        }
    }
    const submit_login = async (e) => {
        
        e.preventDefault();
        const response = await fetch('/login', {
            method:"POST",
            body: JSON.stringify({
                username,
                password
            }),
            headers: {
                "Content-type":"application/json"
              }
        })
        if (response.status == 200) {
            console.log(response)
            history.push("/")
        }
    }

    return (
        <>
            <div className="login_main">
              
                <div className="inside_nav">
                    <h2>Sign in</h2>
                    <form  method="POST">
                        

                        <div>

                        <input type="text" name="UserName" placeholder="username" onChange={chnagedetail} value={username} />
                        <br />
                            <input type="password" name="password" onChange={chnagedetail} placeholder="password" value={password} />
                            <input type="submit" onClick={submit_login} value="SUBMIT" />
                        </div>

                        <div className="update_signup">
                            <p><b><small>Have'nt Gravity Account?<Link style={{ textDecoration: "none" }} to="/signup"> <big style={{ fontSize: "18px", color: "" }}>Sign UP</big></Link> </small></b></p>
                            <p><big><Link to="/seller" style={{ textDecoration: "none"}}>Open Account As Seller</Link></big></p>
                        </div>
                        
                    </form>
                 </div>
            
            </div>
        </>
    )
}

export default Login;
