import axios from "axios";
import React, { useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp({ changeKey }) {

  const [showPassword, setShowPassword] = useState(false);
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

const handleSignUp = async (e) => {
  e.preventDefault();
  const formData = { name: userName, email: email, password: password };
  // console.log("Form Data:", formData);
  try {
    const response = await axios.post("http://localhost:4100/signup", formData);
    const responseData = response.data;
    if (responseData.success) {
      localStorage.setItem("token", responseData.token);
      alert("Sign-Up successful");
      console.log("User created successfully with token:", responseData.token);
      changeKey(); 
    } else {
      alert(responseData.errors || "Sign-Up failed");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("An error occurred during sign-up.");
  }
};

  return (
    <>
      <form id="SignUp-Form" onSubmit={handleSignUp}>
  
        <FloatingLabel controlId="signup-name" label="Name" className="mb-3">
          <Form.Control id="name" type="text" placeholder="Name" required onChange={(e) => setUserName(e.target.value)} />
        </FloatingLabel>
  
        <FloatingLabel controlId="signup-email" label="Email address" className="mb-3" >
          <Form.Control onChange={(e) => setEmail(e.target.value)} id="email" type="email" placeholder="name@example.com" required />
        </FloatingLabel>
  
        <FloatingLabel controlId="signup-password" label="Password" className="mb-3" >
          <Form.Control onChange={(e) => setPassword(e.target.value)} id="password" type={showPassword ? "text" : "password"} placeholder="Password" autoComplete="new-password" required />
        </FloatingLabel>
  
        <div className="form-link">
          <h6 className="font-size-small"> Already a User ?&nbsp;
            <Link to="#" onClick={(e) => {
                e.preventDefault();
                changeKey();
              }}
            >
              Login here!
            </Link>
          </h6>
        </div>
  
        <div className="form-checkbox">
          <Form.Check label="Show password"
            onChange={(e) => setShowPassword(e.target.checked)}
          />
        </div>   <br />
        <div className="form-checkbox">
          <Form.Check label="By clicking this you're accepting all the terms and conditions of our organization." required />
        </div>  <br />

        <button type="submit" className="btn btn-warning mb-3"> Sign-Up </button>
        {/* <div className="mt-3 hr-for-or mx-auto text-center">
          <hr /> &nbsp; <span className="align-top"> or </span> &nbsp; <hr />
        </div>
        <button type="button" className="login-with-google-btn" disabled > Sign up with Google </button> */}
      </form>
    </>
  );
}
