import React, { Component } from 'react'

//import Meal from './Meal'
import {connect} from 'react-redux'
import {deleteMeal} from '../actions/deleteMeal'
import MealCard from './MealCard'
//functional component becuase its going to present a list of accounts 
//arrow function
//with functional components you have to pass props as argument, with class component, use 'this.props'
//no rennder in functional components, just return 

class Meals extends React.Component{
   
    handleDelete(meal) {
        this.props.deleteMeal(meal.id)
        this.forceUpdate()
    } 
    render(){
        return (
            <div>
            {[...this.props.meals].reverse().map(meal =>  <MealCard key={meal.id} meal={meal} onDelete={() => this.handleDelete(meal)} />)} 
          
             </div> 
        )
    }
}
// const Meals = (props) =>{

//     const handleDelete = (meal) => {
//         props.deleteMeal(meal.id)
//     }
//     return (
//         <div>
//        {[...props.meals].reverse().map(meal => //reversing the clone 
//        <li key={meal.id}>
//            <Link to={`/meals/${meal.id}`}>
//                 <img className="img" src={meal.img_src} alt=""  height="200" width="250" />
//                <span>{meal.location}... "{meal.caption}"</span> 
//            </Link>
//            <button onClick={() => handleDelete(meal)}>Delete</button> 
//        </li> )} 
//         </div>
//     )

// }

//export default Meals
export default connect(null, {deleteMeal})(Meals)

//<p key={meal.id}> {meal.location} - {meal.caption}</p> )}