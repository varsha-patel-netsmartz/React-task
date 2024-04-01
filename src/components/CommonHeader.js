// CommonHeader.js
import React from 'react';
import { Link } from "react-router-dom";
import './style.css'
import { useLocation } from 'react-router-dom'

function CommonHeader() {
  const location = useLocation();
  return (
    <>
      <div align='center' style={{paddingTop: '20px'}}>
        <Link to="/" className={location.pathname==='/'?"header-link active":"header-link"}>Home</Link>
        <Link to="/counter" className={location.pathname==='/counter'?"header-link active":"header-link"}>Counter</Link>
        <Link to="/parent" className={location.pathname==='/parent'?"header-link active":"header-link"}>Parent</Link>
        <Link to="/data-fetcher" className={location.pathname==='/data-fetcher'?"header-link active":"header-link"}>Data Fetcher</Link>
        <Link to="/login-form" className={location.pathname==='/login-form'?"header-link active":"header-link"}>Login Form</Link>
        <Link to="/card-container" className={location.pathname==='/card-container'?"header-link active":"header-link"}>Card Container</Link>
        <Link to="/todo-form" className={location.pathname==='/todo-form'?"header-link active":"header-link"}>Todo Form</Link>
        <Link to="/todo-list" className={location.pathname==='/todo-list'?"header-link active":"header-link"}>Todo List</Link>
      </div>
    </>
    );
}

export default CommonHeader;
