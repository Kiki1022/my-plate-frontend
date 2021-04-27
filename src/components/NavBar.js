import React from 'react';
import {Route, Switch} from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import MealsForm from '../components/MealsForm'
import Meals from '../components/Meals'
import Meal from '../components/Meal'


const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink to="/">Home</NavLink><br></br>
      <NavLink to="/meals/new">Add a Meal</NavLink><br></br>    
      <NavLink to="/meals">View All Meals</NavLink><br></br>
      
     </div>
  )}


export default NavBar



