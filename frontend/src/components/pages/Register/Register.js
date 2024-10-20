import React, { useState } from "react";
import "./Register.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import SignUp from "./SignUp";
import Login from "./SignIn";
import Footer from "../../sections/footer/Footer";
import Header2 from "../../sections/header/Header2";

export default function Register() {
  const [activeKey, setActiveKey] = useState("Sign-Up");

  const changeKey = (key) => {
    setActiveKey(key);
  };

  return (
    <>
      <Header2 />

      <div id="Register">
        <div className="card">
          
          <Tabs activeKey={activeKey} onSelect={(k) => setActiveKey(k)} id="uncontrolled-tab-example" className="mb-3" justify >

            <Tab eventKey="Sign-Up" title="Sign-Up" id="signup">
              <SignUp changeKey={() => changeKey("Sign-In")} />
            </Tab>

            <Tab eventKey="Sign-In" title="Sign-In" id="login">
              <Login changeKey={() => changeKey("Sign-Up")} />
            </Tab>

          </Tabs>
        </div>

        <div className="dark-bg-hr">
          <hr />
        </div>

      </div>

      <Footer />
    </>
  );
}
