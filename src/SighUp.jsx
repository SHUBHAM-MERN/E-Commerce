import React, { useState } from "react";
import './signup.css'
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";

function SighUp() {
    const history = useHistory();
    const [state, setstate] = useState({
        username: "",
        email: "",
        password: "",
        confirmpassword:""
    })

    const chnagedetail = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setstate((pre) => {
            return {
                ...pre,
                [name]:value,
            }
        })
    }
    const submitsignup = async (e) => {
        e.preventDefault();
        const { username, email, password, confirmpassword } = state;
        const response =await fetch("/registtation", {
            method: "POST",
            body: JSON.stringify({
              username, email, password, confirmpassword
            
            }) ,
            headers: {
              "Content-type":"application/json"
            },
      
        })
        if (response.status == 200) {
            history.push("/login")
       }
    }

    return (
        <>
            <div className="signup_main">
                <div className="inside_signup">
                <h2>Sing Up</h2>
                  
                    <div>
                        
                    <form  method="POST">
                        <div>
                            <input type="text" name="username" placeholder="Username" onChange={chnagedetail} value={state.username} />
                            <br />
                            <input type="email" name="email"  placeholder="123@gamil.com" onChange={chnagedetail} value={state.email} />
                            <br />
                            <input type="password" name="password" onChange={chnagedetail} placeholder="password" onChange={chnagedetail} value={state.password} />
                            <br />
                            <input type="password" name="confirmpassword" onChange={chnagedetail} placeholder="Confirm Password" onChange={chnagedetail} value={state.confirmpassword} />
                            <br />
                                
                            <input type="submit" onClick={submitsignup} value="SUBMIT" />
                            <br />
                        </div>
                    </form>
                    </div>
                    <div>
                        <p><small><b>Alredy Have Account? <Link to="./login"> <big style={{fontSize:"20px"}}><b>Sing IN</b></big></Link></b></small></p>
                    </div>
                   
                </div>
            </div>
        </>
    );
}

export default SighUp;
