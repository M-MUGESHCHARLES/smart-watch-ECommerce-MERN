import React from 'react'
import { Link } from "react-router-dom";
import ScrollToTopLink from './ScrollToTopLink';


export default function RegisterButton() {
  return (
    <>
    <ScrollToTopLink to="/register" >
      <button type="button" className="btn btn-outline-secondary zoom-effect">
        <span className="Header-Button">Sign-up </span>
      </button>
    </ScrollToTopLink>
    </>
  );
}
