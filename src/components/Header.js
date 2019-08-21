import React from 'react';
// import {BrowserRouter as Router ,Route} from 'react-router-dom';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
// import Home from './Home';
// import About from './About';

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container">
          <a className="navbar-brand text-light" href=".">PHONE SHOP</a>
          <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon " ></span>
          </button>

          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <NavLink activeStyle={{
                  fontWeight: "bold",
                  color: "red"
                }} to="/" exact className="nav-link" >Home</NavLink>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link text-light" >About</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-light" href="." id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Account
        </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">

                  {/* <a className="dropdown-item " href=".">Signup</a>
                  <a className="dropdown-item " href=".">Login</a>
                  <a className="dropdown-item " href=".">Logout</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href=".">Something else here</a> */}
            

                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled text-light" href="." aria-disabled="true">My Order</a>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>

   
    </div>
  )
}

export default Header;