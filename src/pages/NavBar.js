import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav>
      <NavLink
        to="/"
        className="nav-link"
      >
        About
      </NavLink>
      <NavLink
        to="/add"
        className="nav-link"
      >
        Add Mic
      </NavLink>
      <NavLink
        to="/microphones"
        className="nav-link"
      >
        Mic Locker
      </NavLink>
    </nav>
  );
};

export default NavBar