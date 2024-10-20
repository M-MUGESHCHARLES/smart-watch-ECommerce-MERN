import React, { useEffect, useState } from 'react';
import "./Shop.css";
import {ShopHeader} from '../../sections/header/ShopHeader.js';
import Footer2 from '../../sections/footer/Footer2.js';
import { Outlet, useNavigate } from 'react-router-dom';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default function Shop() {

  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      console.error("No token found, prompting for sign-in");

      // Delay the modal appearance by 6 seconds
      const timer = setTimeout(() => {
        setShowModal(true); // Show the modal if the token is not found after 6 seconds
      }, 5000);

      // Cleanup the timer when the component unmounts or when the effect re-runs
      return () => clearTimeout(timer);
    } else {
      console.log("Token found:", token);
      // Initialize any state or make API calls as needed
    }
  }, []);

  const handleLoginRedirect = () => {
    setShowModal(false);
    navigate("/register");
  };

  return (
    <>
      <ShopHeader />
      <Outlet />
      <Footer2 />
      <Modal show={showModal} onHide={handleLoginRedirect}>
        <Modal.Header closeButton>
          <Modal.Title>Sign-In Required</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          You need to sign in to access the shop. Please log in.
        </Modal.Body>
        <Modal.Footer>
          <Button variant='warning' onClick={handleLoginRedirect}>
            Go to Sign-In
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
