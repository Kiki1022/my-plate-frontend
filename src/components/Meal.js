import React from 'react' 


const Meal = (props) => {

    let meal; //initializing the variable within the scope of this component

     if (props.meals.length) 
     // eslint-disable-next-line 
        meal = props.meals.find(m => m.id == props.match.params.id) //using router props to make sure id of the route matches meal id
  
    return meal ? (
        <div className="card">
            <div className="card__image">
                <img className="img" src={meal.img_src} alt=""  height="200" width="250" />
            </div>

            <div className="card__body">   
                <h2>{meal ? meal.location : null}</h2> 
                <h4>"{meal ? meal.caption : null}"</h4>    
            </div> 
        
        </div>) : <div></div>
}

export default Meal