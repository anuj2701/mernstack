import React, { useState } from "react";
import {NavLink} from "react-router-dom"
function Login() {
  const [user, setUser] = useState({
    email: "",password: "",
  });


  let names, value;
  const handleInputs = (e) => {
    console.log(e);
    names = e.target.name;
    value = e.target.value;

    setUser({...user, [names]:value });
  }
  const PoostData = async (e) => {
    e.preventDefault();

    const {email , password} = user;

    const res = await fetch("/signin", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
         email, password})
    })
  
    const data = await res.json();
  };
    return (
        <>
        
      <body>
        <div className="container">
          <div className="title">
            Login
            <form action="/signin" method="POST">
              <div className="user-details">
                
                <div className="input-box">
                  <span className="details">Email</span>
                  <input
                    type="text"
                    name="email"
                    placeholder="Enter your email"
                    value={user.email}
                    onChange={handleInputs}
                    required
                    
                  ></input>
                </div>
                <div className="input-box">
                  <span className="details">Password</span>
                  <input
                    type="text"
                    name="password"
                    placeholder="Enter your password"
                    value={user.password}
                    onChange={handleInputs}
                    required
                  ></input>
               </div>
  
              </div>
            
              <div className="button">
                <input type ="submit" value="LOGIN" onClick={PoostData}/>
              </div>
              <div>
                <NavLink to="/Signup" className="already-registered">I am already registered,Login</NavLink>
              </div>
            </form>
          </div>
        </div>
      </body>
      
    </>
  )
}


export default Login
