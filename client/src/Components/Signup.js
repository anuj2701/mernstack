import React from "react";

function Signup() {
  return (
    <>
      <body>
        <div className="contanier">
          <div className="title">
            Registration
            <form action="#">
              <div className="user-details">
                <div className="input-box">
                  <span className="details">Full Name</span>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    required
                  ></input>
                </div>
                <div className="input-box">
                  <span className="details">Username</span>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    required
                  ></input>
                </div>
                <div className="input-box">
                  <span className="details">Email</span>
                  <input
                    type="text"
                    placeholder="Enter your email"
                    required
                  ></input>
                </div>
                <div className="input-box">
                  <span className="details">Phone</span>
                  <input
                    type="text"
                    placeholder="Enter your phone"
                    required
                  ></input>
                </div>
                <div className="input-box">
                  <span className="details">Password</span>
                  <input
                    type="text"
                    placeholder="Enter your password"
                    required
                  ></input>
                </div><div className="input-box">
                  <span className="details">Confirm Password</span>
                  <input
                    type="text"
                    placeholder="Enter your Confirm Password"
                    required
                  ></input>
                </div>
              </div>
            </form>
          </div>
        </div>
      </body>
    </>
  );
}

export default Signup;
