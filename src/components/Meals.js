import React from 'react'
//functional component becuase its going to present a list of accounts 
//arrow function
//with functional components you have to pass props as argument, with class component, use 'this.props'
//no rennder in functional components, just return 

const Meals = (props) =>{

    return (
        <div>
       {props.meals.map(meal => 
          <p key={meal.id}> {meal.location} - {meal.caption}</p> )}
        </div>
    )

}

export default Meals