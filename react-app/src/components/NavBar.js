
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../images/airbnb-logo.svg';
import sharedndLogo from '../images/sharednd-logo-2.png'
import defaultProfilePic from '../images/default-user-profile-pic.png';
import './NavBar.css'
import Dropdown from './Dropdown';

const NavBar = () => {
  const sessionUser = useSelector(state => state.session.user)
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => {
    setDropdown(!dropdown)
  }

  return (
    <nav className="navbar-container">
      <div className='full-logo'>
        <NavLink to='/' exact={true} activeClassName='active'>
          <Logo />
          <img className='logo-text' src={sharedndLogo} />
        </NavLink>
      </div>
      <div className='navbar-right'>
        <div>
          <NavLink to='/login' exact={true} activeClassName='active'>
            Login
          </NavLink>
        </div>
        <div>
          <NavLink to='/sign-up' exact={true} activeClassName='active'>
            Sign Up
          </NavLink>
        </div>
        {
          sessionUser &&
          <>
            <div onClick={() => handleClick()}>
              <img className="profile-pic" src={defaultProfilePic} />
              {dropdown && <Dropdown sessionUser={sessionUser} />}
            </div>
          </>
        }
        {/* <div>
          <NavLink to='/users' exact={true} activeClassName='active'>
            Users
          </NavLink>
        </div> */}
      </div>
    </nav >
  );
}

export default NavBar;
