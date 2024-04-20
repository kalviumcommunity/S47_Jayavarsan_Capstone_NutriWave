import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Signup.css";
import banner1 from "../assets/banner1.png";
import backicon from "../assets/back.png";

function Signin() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, you can send the form data to an API or perform any necessary actions
    console.log(formData);
  };

  return (
    <div className="signup_container_div">
      <div className="signup_banner_div">
        <img src={banner1} alt="Banner" />
      </div>
      <div className="signup_form_div">
        <div className="signup_from_main_sub_div">
          <div className="signup_form_backdiv">
            <Link to="/">
              <button>
                <img src={backicon} alt="" />
              </button>
            </Link>
            <div>
              <span>
                Don't have an account? create one{" "}
                <Link to="/signup">
                  <span className="signin_button_signup">Sign up</span>
                </Link>
              </span>
            </div>
          </div>
          <div className="signup_form_mainsignup_option_div">
            <form
              className="signup_form_mainsignup_option_div_forum"
              onSubmit={handleSubmit}
            >
              <h1 className="signup_form_title">Sign up</h1>
              <p className="signup_form_subtitle">
                Enter Your Information and satrt you healthy journey
              </p>
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="ex: John@nutriwave.com"
                value={formData.email}
                onChange={handleChange}
              />

              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder=" Password"
                value={formData.password}
                onChange={handleChange}
              />
              <div className="button-container-signuppage">
                <button className="signup_main_button" type="submit">
                  Sign in
                </button>
                <span>Or</span>
                <div className="google_facebook_signup">
                  <div>G</div>
                  <div>F</div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;