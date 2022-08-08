
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';

const NavBar = () => {
  const sessionUser = useSelector(state => state.session.user)
  
  return (
    <nav>
      <ul>
        <li>
          <NavLink to='/' exact={true} activeClassName='active'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/login' exact={true} activeClassName='active'>
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to='/sign-up' exact={true} activeClassName='active'>
            Sign Up
          </NavLink>
        </li>
        {sessionUser &&
          <>
            <li>
              <NavLink to={`/users/${sessionUser.id}/profile`} exact={true} activeClassName='active'>
                User Bookings
              </NavLink>
            </li>
            <li>
              <NavLink to="/spots/new" exact={true} activeClassName='active'>
                Create Spot
              </NavLink>
            </li>
            <li>
              <LogoutButton />
            </li>
          </>
        }
        {/* <li>
          <NavLink to='/users' exact={true} activeClassName='active'>
            Users
          </NavLink>
        </li> */}
      </ul>
    </nav>
  );
}

export default NavBar;
