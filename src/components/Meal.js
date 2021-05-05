import React from 'react' 

const Meal = (props) => {

     let meal;
    
     if (props.meals.length) 
     // eslint-disable-next-line 
        meal=props.meals.find(m => m.id == props.match.params.id) //find is searching through each objects. when m.id == param.id, that is the object we want

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