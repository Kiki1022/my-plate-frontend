import React from 'react' 



const Meal = (props) => {
    let meal;

    console.log(props)
    if (props.meals.length) meal=props.meals.find(m => m.id == props.match.params.id) //find is searching through each objects. when m.id == param.id, that i the object we want




    //let meal = props.meals[props.match.params.id - 1]
    console.log(meal)
    

  

    return meal ?  (

        <div>
            <li> 
            <img className="img" src={meal.img_src} alt=""  height="200" width="250" />
                {meal ? meal.location : null}...   "{meal ? meal.caption : null}"
             
            </li> 
        </div> 
    ) : <div></div>
}
export default Meal