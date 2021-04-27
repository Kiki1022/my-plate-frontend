import React from 'react';
import {Route, Switch} from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import MealsForm from '../components/MealsForm'
import Meals from '../components/Meals'
import Meal from '../components/Meal'
import './styles/NavBar.css'

const NavBar = () => {
  return (
    <div className="navbar">
      
      <NavLink to="/">Home</NavLink>
      <NavLink to="/meals/new">Add a Meal</NavLink>
      <NavLink to="/meals">View All Meals</NavLink>
      
     </div>
  )}


export default NavBar



