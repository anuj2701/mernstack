import React, { useState } from "react";
import { useHistory } from "react-router-dom";
function Signup() {
  const history = useHistory();
  


  const [user, setUser] = useState({
    name: "",email: "", phone: "",work: "",password: "", cpassword: "",
  });

  let names, value;
  const handleInputs = (e) => {
    console.log(e);
    names = e.target.name;
    value = e.target.value;

    setUser({...user, [names]:value });
  };

  const PostData = async (e) => {
    e.preventDefault();

    const { name, email, phone, work, password, cpassword } = user;

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name, email, phone, work, password, cpassword})
    });
    const data = await res.json();

    if (data.status === 422 || !data) {
      window.alert("Invalid registration ");
      console.log("invalid registration");
    } else {
      window.alert("Succesful registration ");
      console.log("Succesful registration");

      history.push("/login");
    }
  };

  return (
    <>
      <body>
        <div className="container">
          <div className="title">
            Registration
            <form method="POST">
              <div className="user-details">
                <div className="input-box">
                  <span className="details">Full Name</span>
                  <input
                    type="text"
                    name="name"
                    value={user.name}
                    onChange={handleInputs}
                    placeholder="Enter your name"
                    required
                  ></input>
                </div>

                <div className="input-box">
                  <span className="details">Email</span>
                  <input
                    type="text"
                    name="email"
                    value={user.email}
                   onChange={handleInputs}
                    placeholder="Enter your email"
                    required
                  ></input>
                </div>
                <div className="input-box">
                  <span className="details">Phone</span>
                  <input
                    type="text"
                    name="phone"
                    value={user.phone}
                   onChange={handleInputs}
                    placeholder="Enter your phone"
                    required
                  ></input>
                </div>
                <div className="input-box">
                  <span className="details">Work</span>
                  <input
                    type="text"
                    name="work"
                    value={user.work}
                  onChange={handleInputs}
                    placeholder="Enter your Work"
                    required
                  ></input>
                </div>
                <div className="input-box">
                  <span className="details">Password</span>
                  <input
                    type="text"
                    name="password"
                    value={user.password}                    onChange={handleInputs}
                    placeholder="Enter your password"
                    required
                  ></input>
                </div>
                <div className="input-box">
                  <span className="details">Confirm Password</span>
                  <input
                    type="text"
                    name="cpassword"
                    value={user.cpassword}
                    onChange={handleInputs}
                    placeholder="Enter your Confirm Password"
                    required
                  ></input>
                </div>
              </div>
              <div className="button">
                <input type="submit" value="register" onClick={PostData} />
              </div>
            </form>
          </div>
        </div>
      </body>
    </>
  );
}

export default Signup;
