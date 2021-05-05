import React from 'react'
import MealCard from './MealCard'

const MealList = (props) => {

    const renderMeal = props.meals.reverse().map(meal => <MealCard key={meal.id} meal={meal}  />)

    return(
        <div>
         {renderMeal}
        </div>
    )

}
export default MealList