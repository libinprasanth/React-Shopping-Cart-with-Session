import React, { Component } from "react";
import { NavLink } from 'react-router-dom'; 
import '../css/header.scss';

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <header>
          <div className="">
            <nav className="navbar navbar-expand navbar-light bg-transparent p-0"> 
              <NavLink to='/' className='navbar-brand'>
                SHOP
              </NavLink>
              <button className="navbar-toggler">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <NavLink to='/' exact className='nav-link'>Home</NavLink> 
                  </li>
                  <li className="nav-item ">
                    <NavLink to='/cart' className='nav-link' activeClassName="active">Cart</NavLink> 
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </header>
      </React.Fragment>
    );
  }
}

export default Header;
