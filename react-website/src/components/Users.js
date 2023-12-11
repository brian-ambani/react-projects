import React from "react";
import { Outlet } from "react-router-dom";

export default function Users() {
  return (
    <div>
      <h1>Users</h1>
      <p>Check out our users</p>
      <h2>User 1</h2>
      <h2>User 2</h2>
      <h2>User 3</h2>
      <Outlet />
    </div>
  );
}
