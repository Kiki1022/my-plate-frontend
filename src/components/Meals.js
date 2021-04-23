import React from 'react'
import { Link } from 'react-router-dom'
//import Meal from './Meal'
import {connect} from 'react-redux'
import {deleteMeal} from '../actions/deleteMeal'
//functional component becuase its going to present a list of accounts 
//arrow function
//with functional components you have to pass props as argument, with class component, use 'this.props'
//no rennder in functional components, just return 

const Meals = (props) =>{

    const handleDelete = (meal) => {
        props.deleteMeal(meal.id)
    }
    return (
        <div>
       {props.meals.map(meal => 
       <li key={meal.id}>
           <Link to={`/meals/${meal.id}`}>{meal.location}: {meal.caption}
           <button onClick={() => handleDelete(meal)}>Delete</button>
           </Link>
       </li> )} 
        </div>
    )

}

//export default Meals
export default connect(null, {deleteMeal})(Meals)

//<p key={meal.id}> {meal.location} - {meal.caption}</p> )}