import { NavLink, Outlet } from "react-router-dom";

export default function Products() {
  return (
    <>
      <div>
        <input type="text" placeholder="Search products" />
      </div>
      <nav className="product-links">
        <NavLink to="featured">Featured</NavLink>
        <NavLink to="new">New</NavLink>
      </nav>
      <Outlet />
    </>
  );
}
