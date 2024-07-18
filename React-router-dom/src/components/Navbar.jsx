import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    
    <ul style={{display:"flex"}}>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/products">Products</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </ul>
  );
}
