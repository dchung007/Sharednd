
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../images/airbnb-logo.svg';
import { ReactComponent as DropdownDash } from '../images/navbar-dash.svg';
import { ReactComponent as ProfilePic } from '../images/default-profile-pic.svg';
import sharedndLogo from '../images/sharednd-logo-2.png'
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
          <button className='dropdown-button' onClick={() => handleClick()}>
            <DropdownDash />
            <ProfilePic/>
          </button>
          {dropdown && <Dropdown sessionUser={sessionUser} />}
        </div>
      </div>
    </nav >
  );
}

export default NavBar;
