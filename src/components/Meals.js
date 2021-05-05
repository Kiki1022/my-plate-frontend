import React from 'react'
import {connect} from 'react-redux'
import {deleteMeal} from '../actions/deleteMeal'
import MealCard from './MealCard'
import SearchLocation from './SearchLocation'
import MealList from './MealList'

//functional component becuase its going to present a list of accounts 
//arrow function
//with functional components you have to pass props as argument, with class component, use 'this.props'
//no render in functional components, just return 

class Meals extends React.Component{

    state = {
        searchMeal: ''
    }
   
    handleDelete(meal) {
        this.props.deleteMeal(meal.id)
        this.forceUpdate()
    } 

    handleLocation = (value) => {

        const newList = this.props.meals.filter( meal => 
            {
                const mealToLC = meal.location.toLowerCase()
                const valueToLC = value.toLowerCase()

                return mealToLC.includes(valueToLC)
            })

        this.setState({
            searchMeal: newList
        })     
    }
   
    render(){
        return (
            <div className="meals-list">
               <SearchLocation handleLocation={this.handleLocation} />
               <MealList meals = {this.state.searchMeal.length > 0 ? this.state.searchMeal : this.props.meals} />
             </div>
        )
    }
}

export default connect(null,{deleteMeal})(Meals)

