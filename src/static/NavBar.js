import React from 'react';
import { NavLink } from 'react-router-dom';


const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink to="/">MyPlate</NavLink>
      <NavLink to="/meals/new">Add a Meal</NavLink>
      <NavLink to="/meals">All Meals</NavLink>
    </div>
  )
}

export default NavBar



