import React from 'react' 
import { Link } from 'react-router-dom'


const MealCard = ({meal, onDelete}) => {

return (
    <li>
    <Link to={`/meals/${meal.id}`}>
    <h2><span>{meal ? meal.location : null}</span></h2> 
    </Link>
    <h4><span>"{meal ? meal.caption : null}"</span></h4>
    <img className="img" src={meal.img_src} alt=""  height="200" width="250" /><br/>
    <button onClick={onDelete}>Delete</button> 
</li> ) 
}

export default MealCard