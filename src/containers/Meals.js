import React from 'react'
import {connect} from 'react-redux'
import MealCard from '../components/MealCard'
import SearchLocation from '../forms/SearchLocation'
import { deleteMeal } from '../actions/deleteMeal'


class Meals extends React.Component{

    state = {
        searchMeal: [],
        //sortedList: []
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

    handleDelete(meal) {
        this.props.deleteMeal(meal.id)
        //this.props.history.push('/meals')

        //debugger
        //this.forceUpdate()//look up
    }

    //  sortMeal = () => { 
    //     const newList =  this.props.meals.sort((a,b) => (a.location < b.location)  ? 1 : -1)
    //     this.setState({
    //         sortedList: newList
    //     })
    //  }
     
    
    renderMeals(){
        const meals = this.state.searchMeal.length ? this.state.searchMeal : this.props.meals
         return [...meals].reverse().map(meal => <MealCard key={meal.id} meal={meal} handleDelete={ () => this.handleDelete(meal)} />)//cloning original array
    }
   
    render(){
           return (
            <div>
                {/* <button onClick={this.sortMeal}>SORT</button> */}
               <SearchLocation handleLocation={this.handleLocation} />
               <div className="meals-list">
                    {(this.renderMeals())}
               </div>
             </div>
        )
    }
    
}

 export default connect(null, {deleteMeal})(Meals)

