import React from 'react' 



const Meal = (props) => {
    console.log(props)

    let meal = props.meals[props.match.params.id - 1]


  

    return(
        <div>
            <li> 
            {/* <img className="img" src={meal.img_src} alt=""  height="200" width="250" /><br></br> */}
                {meal ? meal.location : null}...   "{meal ? meal.caption : null}"
             
            </li> 
        </div>
    )
}
export default Meal