import { NavLink } from "react-router-dom";
import { useAuth } from "./auth";

export default function Nav() {
  const auth = useAuth();
  return (
    <nav className="nav-links">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/products">Products</NavLink>
      <NavLink to="/users">Users</NavLink>
      <NavLink to="/profile">Profile</NavLink>
      {!auth.user && <NavLink to="/login">Login</NavLink>}
    </nav>
  );
}
