import React, { useEffect, useState } from 'react';
import RegisterButton from '../../component/RegisterButton';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import ScrollToTopLink from '../../component/ScrollToTopLink';

// icons
import { MdSpeaker } from "react-icons/md";
import { IoBagAddSharp, IoHeadsetSharp, IoWatch,  } from "react-icons/io5";
import { CartButton } from '../../component/CartButton';


const popover = (
  <Popover id="popover-basic" className="custom-popover">
    <Popover.Header as="h3"> 😓 OOPS !</Popover.Header>
    <Popover.Body>No deals available at the moment.</Popover.Body>
  </Popover>
);

export const ShopHeader = () => {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const storedEmail = localStorage.getItem('email');
    const token = localStorage.getItem("token");

    console.log("Stored Email : ", storedEmail);

    if (token && storedEmail) {
      setIsAuthenticated(true);
      setUserName(storedEmail);
    }
  }, []);

  const handleLogout = async () => {
    const userConfirmed = window.confirm(
      `Are you sure you want to Log Out, ${userName}?`
    );
    if (userConfirmed) {
      try {
        localStorage.removeItem("token");
        localStorage.removeItem("email"); // Changed from "userName" to "email"
        localStorage.removeItem("cart");
        setIsAuthenticated(false);
        setUserName("");
        alert("Logged out successfully");
        console.log("User signed out");
        window.location.reload();
      } catch (error) {
        console.error("Error logging out:", error);
        alert("Error logging out");
      }
    } else {
      console.log("User canceled sign out");
    }
  };

  const userProfileBadge = userName.slice(0,1);

  return (
    <>
   
    <div className="header sticky-top shop-header" id="header">
     
    <nav className="navbar navbar-expand-lg py-3" >
    <div className="container-fluid">
      <ScrollToTopLink to='/'><a className="text-decoration-none navbar-brand urbanist" href="/">SMART-WATCH</a></ScrollToTopLink>
     
      <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2" >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="offcanvas offcanvas-start " tabIndex="-1" id="offcanvasNavbar2" >
        <div className="offcanvas-header">

          <h5 className="offcanvas-title" id="offcanvasNavbar2Label">SMART-WATCH </h5>
          
          <button type="button" className="btn-close btn-close-dark" data-bs-dismiss="offcanvas"></button>

        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">

            <li className="nav-item">
              <ScrollToTopLink to='/shop'><button className="nav-link btn"  href="#" data-bs-dismiss="offcanvas">Home</button></ScrollToTopLink>
            </li>

            <li className="nav-item dropdown">

              <button className="nav-link dropdown-toggle btn" type="button" data-bs-toggle="dropdown" >
                Products
              </button>

              <ul className="dropdown-menu border-secondary border-opacity-50">

                {/* <li><button className="dropdown-item " href="#"> <FaPersonSwimming  className='fs-4 icon-color me-2' /> &nbsp; Sports Watches</button></li>
                <li><button className="dropdown-item " href="#">  <MdWorkspacePremium  className='fs-4 icon-color me-2' /> &nbsp; Premium Watches</button></li>
                <li><button className="dropdown-item " href="#"> <BiFemale className='fs-4 icon-color me-2'/> &nbsp; Women's Watches</button></li>
                <li><button className="dropdown-item " href="#"> <GiLovers className='fs-4 icon-color me-2'/> &nbsp; Couple's Watches</button></li>
                <li>
                  <hr className="dropdown-divider w-75"/>
                </li> */}

                <li>
                  <ScrollToTopLink to="smart-watches">
                   <button className="dropdown-item " href="SmartWatches" data-bs-dismiss="offcanvas"> <IoWatch  className='fs-4 icon-color me-2' /> &nbsp; Smart Watches </button>
                  </ScrollToTopLink> 
                </li>
                <li>
                  <hr className="dropdown-divider w-75 mx-auto"/>
                </li>
                <li>
                  <ScrollToTopLink to="wireless">
                  <button className="dropdown-item " href="#" data-bs-dismiss="offcanvas"> <IoHeadsetSharp  className='fs-4 icon-color me-2' /> &nbsp; Wireless TWS </button></ScrollToTopLink>
                </li>
                <li>
                  <hr className="dropdown-divider w-75 mx-auto"/>
                </li>
                <li>
                  <ScrollToTopLink to='sound-bars'>
                  <button className="dropdown-item " href="#" data-bs-dismiss="offcanvas"><MdSpeaker className='fs-4 icon-color me-2' /> &nbsp; Sound bars</button></ScrollToTopLink>
                </li>
                <li>
                  <hr className="dropdown-divider w-75 mx-auto"/>
                </li>
                <li>
                  <ScrollToTopLink to='accessories'>
                  <button className="dropdown-item " href="#" data-bs-dismiss="offcanvas"> <IoBagAddSharp className='fs-4 icon-color me-2' /> &nbsp; Accessories</button></ScrollToTopLink>
                </li>
              </ul>

            </li>

            <li className="nav-item">
              <OverlayTrigger trigger="hover" placement="bottom" overlay={popover}>
                <button className="nav-link "  href="#" data-bs-dismiss="offcanvas">Deals</button>
              </OverlayTrigger>                          
            </li>

            <li className="nav-item">
              <ScrollToTopLink to='more-products'><button className="nav-link btn" href="" data-bs-dismiss="offcanvas">More</button></ScrollToTopLink>
            </li>
          </ul>

          <form className="d-flex mt-3 mt-lg-0 me-0 me-lg-2" role="search">

            <input className="form-control me-2 rounded-pill py-1" type="search" placeholder="Search" />

            {/* <button className="btn btn-outline-secondary rounded-pill" type="submit">
                <i className="fa-solid fa-magnifying-glass d-xl-none "></i> <span className='d-none d-xl-block'>Search</span>
            </button> */}
          </form>

          <div className="col-md-3 text-center header-buttons-div mt-4 pe-lg-3 mt-lg-0 d-flex">
          <span className="me-2">
            {isAuthenticated ? (

              <div className="dropdown px-2">
                <button className="d-flex align-items-center border-0 dropdown-toggle" data-bs-toggle="dropdown" >
                  <p className="bg-warning border-secondary border fs-6 m-0 p-0 px-3 py-2 rounded-circle text-capitalize text-white fw-bold ">{userProfileBadge}</p>
                </button>
              <ul className="dropdown-menu text-small shadow">
                <li><button className="dropdown-item" disabled data-bs-dismiss="offcanvas" >Settings</button></li>
                <li><button className="dropdown-item" disabled data-bs-dismiss="offcanvas" >Profile</button></li>
                <li><hr className="dropdown-divider" /></li>
                <li><button className="dropdown-item" onClick={handleLogout} data-bs-dismiss="offcanvas" >Sign-Out</button></li>
              </ul>
            </div>
            
          ) : (
            <RegisterButton  data-bs-dismiss="offcanvas"/>
          )}
          </span>

          <span id="cart" data-bs-dismiss="offcanvas">
            <CartButton />
          </span>
          </div>

          

        </div>
      </div>
    </div>
  </nav>
  </div>
    
 </>
  );
};
