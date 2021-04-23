import React from 'react' 
import {Redirect} from 'react-router-dom'

const Meal = (props) => {
    console.log(props)

    let meal = props.meals[props.match.params.id - 1]
    console.log(meal)

    return(
        <div>
            <li> 
                {/* {meal ? null : <Redirect to='/meals' />} */}
                {meal ? meal.location : null} - {meal ? meal.caption : null}
            </li> 
        </div>
    )
}
export default Meal