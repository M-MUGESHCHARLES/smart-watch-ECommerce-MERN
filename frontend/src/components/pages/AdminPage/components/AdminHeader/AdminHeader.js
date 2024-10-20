import React from 'react';
import { ReactComponent as AdminProfile } from "../../../../images/icons/account-avatar-profile-user-11-svgrepo-com.svg";
import { Link } from 'react-router-dom';



export const AdminHeader = () => {
  return (
    <div className="Header" id='Header'>
      <header className="m-0 p-0 d-flex flex-row justify-content-between">
        {/* <div className="col-2 col-md-1 align-self-center m-0">
          <span className='container justify-content-center d-flex p-0 m-0 '>
             <img src={logo} alt="LOGO" className="rounded mx-auto" height='auto' width='100%' /> 
          </span>
        </div> */}

        <div className=''>
          <div className=" d-flex flex-column px-4 py-2">
            <span className="fs-3 fw-medium navbar-brand"> SMART-WATCH </span>
            <span className="fs-6 fw-bold text-danger"> ADMIN PANNEL </span>
          </div>
        </div>
          <Link to='/shop' className='my-auto'><button className='btn btn-outline-secondary' > Live site </button></Link>

        <div className="dropdown align-self-center px-4 py-2">
          <a href="#" className="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">

           <AdminProfile  className="m-1" id="Admin-Profile"/>
            <strong>Admin 1</strong>
          </a>
          <ul className="dropdown-menu text-small shadow">
            {/* <li><a className="dropdown-item" href="#">New project...</a></li> */}
            <li><button className="dropdown-item" href="#" disabled>Settings</button></li>
            <li><button className="dropdown-item" href="#" disabled>Profile</button></li>
            <li><hr className="dropdown-divider" /></li>
            <li><button className="dropdown-item" href="#" disabled>Sign out</button></li>
          </ul>
        </div>
      </header>
    </div>
  );
}
