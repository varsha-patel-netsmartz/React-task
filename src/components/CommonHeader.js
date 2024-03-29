// CommonHeader.js
import React from 'react';
import { Link } from "react-router-dom";
import './style.css'
function CommonHeader() {
  return (
    <>
        <Link to="/" className="header-link">Home</Link>
        <Link to="/counter">Counter</Link>
    </>
    );
}

export default CommonHeader;
