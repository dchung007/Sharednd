import { useState } from "react";
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';


const Dropdown = ({ sessionUser }) => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <div>
      <div>
        <NavLink to={`/users/${sessionUser.id}/profile`} exact={true} activeClassName='active'>
          Trips
        </NavLink>
      </div>
      <div>
        <NavLink to="/spots/new" exact={true} activeClassName='active'>
          Become a host
        </NavLink>
      </div>
      <div>
        <LogoutButton />
      </div>
    </div>
  )
}

export default Dropdown;
