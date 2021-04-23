import React from 'react'
import {Route, Link} from 'react-router-dom'
import Meal from './Meal'
//functional component becuase its going to present a list of accounts 
//arrow function
//with functional components you have to pass props as argument, with class component, use 'this.props'
//no rennder in functional components, just return 

const Meals = (props) =>{

    return (
        <div>
       {props.meals.map(meal => 
       <li key={meal.id}>
           <Link to={`/meals/${meal.id}`}>{meal.location}: {meal.caption}</Link>
       </li> )} 
        </div>
    )

}

export default Meals

//<p key={meal.id}> {meal.location} - {meal.caption}</p> )}