import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav>
      <NavLink
        to="/"
        className="nav-link"
      >
        Home
      </NavLink>
      <NavLink
        to="/form"
        className="nav-link"
      >
        Add Mic
      </NavLink>
      <NavLink
        to="/mics"
        className="nav-link"
      >
        Mic Locker
      </NavLink>
    </nav>
  );
};

export default NavBar