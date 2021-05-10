import React from 'react'
import {connect} from 'react-redux'
import MealCard from '../components/MealCard'
import SearchLocation from '../forms/SearchLocation'
import { deleteMeal } from '../actions/deleteMeal'


class Meals extends React.Component{
    
    state = {
        searchMeal: [],

    }

   
    handleLocation = (value) => {
       console.log(value)
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

    handleDelete(meal) {

        this.props.deleteMeal(meal.id)
        
    }

    
    renderMeals(){
        
        const meals = this.state.searchMeal.length ? this.state.searchMeal : this.props.meals
         return [...meals].reverse().map(meal => <MealCard key={meal.id} meal={meal} handleDelete={ () => this.handleDelete(meal)} />)
    }
   
    render(){
           return (
            <div>
               <SearchLocation handleLocation={this.handleLocation} />
               <div className="meals-list">
                    {(this.renderMeals())}
               </div>
             </div>
        )
    }
    
}

 export default connect(null, {deleteMeal})(Meals)

