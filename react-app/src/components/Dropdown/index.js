import { useState } from "react";
import { NavLink } from 'react-router-dom';
import LoginFormModal from "../auth/LoginFormModal";
import LogoutButton from '../auth/LogoutButton';
import SignupFormModal from "../auth/SignupFormModal";
import './Dropdown.css'


const Dropdown = ({ sessionUser }) => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <div className="dropdown-container">
      {
        !sessionUser &&
        <div>
          {/* <NavLink to='/login' exact={true} activeClassName='active'>
            Login
          </NavLink> */}
          <LoginFormModal />
        </div>
      }
      {
        !sessionUser &&
        <div>
          {/* <NavLink to='/sign-up' exact={true} activeClassName='active'>
            Sign Up
          </NavLink> */}
          <SignupFormModal />
        </div>
      }

      {
        sessionUser &&
        <div>
          <NavLink to={`/users/${sessionUser.id}/profile`} exact={true} activeClassName='active'>
            Trips
          </NavLink>
        </div>
      }
      <div>
        <NavLink to="/spots/new" exact={true} activeClassName='active'>
          Host an experience
        </NavLink>
      </div>
      {
        sessionUser &&
        <div>
          <LogoutButton />
        </div>
      }
    </div >
  )
}

export default Dropdown;
