import React from "react";
import './LoginForm.css';
// import { FaUser,FaLock } from 'react-icons/fa';

 export const LoginForm =() =>{
    return(
        <>
        <div className="wrapper">
            <form action="">
                <h1>Login</h1>
                <div className="input-box">
            <input type="text" placeholder="UserName" required/>
            {/* <FaUser className="icon" /> */}

           </div>
           <div className="input-box">
            <input type="password" placeholder="Password" required/>
           {/* <FaLock className="icon" /> */}
           </div>
           <div className="remember-forgot">
            <label><input type="checkbox"/>Remember Me</label>
            <a href="#">Forgot Password ?</a>
            </div>

      <a href="C:\Users\shalu\OneDrive\Desktop\Workspace\firstreactapp\src\App.js "> <button type="submit">Login</button> </a> 
            <div className="register-link">
                <p>Don't Have an account ?
                    Register
                </p>
            </div>
            </form>
        </div>
        </>
    )
};
export default LoginForm;