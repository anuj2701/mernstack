import React from "react";

function Contact() {
  return (
    <>
      <div className="cards">
        <div className="phonecard">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-phone"
            viewBox="0 0 16 16"
          >
            <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
            <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
          </svg>
          <span className="phone">Phone</span>
          <div className="number">91786447239</div>

          <i class="bi bi-phone"></i>
        </div>
        <div className="phonecard">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-phone"
            viewBox="0 0 16 16"
          >
            <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
            <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
          </svg>
          <span className="phone">Email</span>
          <div className="number">anuj@ngpure.com</div>

          <i class="bi bi-phone"></i>
        </div>
        <div className="phonecard">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-phone"
            viewBox="0 0 16 16"
          >
            <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
            <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
          </svg>
          <span className="phone">Address</span>
          <div className="number">Nagpur</div>

          <i className="bi bi-phone"></i>
        </div>
      </div>
      <div className="contact">
        <div className="container">
          <div className="title">
            Get in Touch
            <form action="#">
              <div className="user-details">
                <div className="input-box">
                  <span className="details">Name </span>
                  <input
                    type="text"
                    placeholder="Enter your Name"
                    required
                  ></input>
                </div>
                <div className="input-box">
                  <span className="details">Email</span>
                  <input
                    type="text"
                    placeholder="Enter your Email"
                    required
                  ></input>
                </div>
                <div className="input-box">
                  <span className="details">Phone No.</span>
                  <input
                    type="text"
                    placeholder="Enter your Number"
                    required
                  ></input>
                </div>
              </div>
              <div className="input-box">
                  <span className="details">Message</span>
                  <input
                    type="text"
                    placeholder="Enter your Message"
                    required
                  ></input>
                </div>

              <div className="button">
                <input type="submit" value="Send Message" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
