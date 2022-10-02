import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {


  return (
    <div>

      <NavLink to="/new">abpot</NavLink>
      <NavLink to="/extra">extra</NavLink>
      <NavLink to="/old">old</NavLink>

    </div>
  );
};

export default Nav;
