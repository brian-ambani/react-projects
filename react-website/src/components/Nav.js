import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="nav-links">
      <NavLink to="/">Home</NavLink>
      <NavLink to="about">About</NavLink>
      <NavLink to="services">Services</NavLink>
      <NavLink to="products">Products</NavLink>
      <NavLink to="users">Users</NavLink>
    </nav>
  );
}
