import React, { Component } from 'react'
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
                {[...this.props.meals].reverse().map(meal =>  
                    <MealCard key={meal.id} meal={meal} onDelete={() => this.handleDelete(meal)} />
                    )} 
             </div> 
        )
    }
}

export default connect(null, {deleteMeal})(Meals)

