import { NavLink } from "react-router-dom";
import clsx from "clsx";
import c from "./Navigation.module.css";

function Navigation() {
  const buildLinkClass = ({ isActive }) =>
    clsx(c.link, isActive && c.activeLink);
  return (
    <nav className={c.nav}>
      <NavLink to="/" className={buildLinkClass}>
        Home
      </NavLink>
      <NavLink to="/catalog" className={buildLinkClass}>
        Catalog
      </NavLink>
    </nav>
  );
}

export default Navigation;
