// CommonHeader.js
import React from 'react';
import { Link } from "react-router-dom";
import './style.css'
function CommonHeader() {
  return (
    <>
        <Link to="/" className="header-link">Home</Link>
        <Link to="/counter" className="header-link">Counter</Link>
        <Link to="/parent" className="header-link">Parent</Link>
        <Link to="/data-fetcher" className="header-link">Data Fetcher</Link>
    </>
    );
}

export default CommonHeader;
