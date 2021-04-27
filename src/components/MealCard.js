import React from 'react' 
import { Link } from 'react-router-dom'


const MealCard = ({meal, onDelete}) => {

return (
    <li>
    <Link to={`/meals/${meal.id}`}>
         <img className="img" src={meal.img_src} alt=""  height="200" width="250" />
        <span>{meal.location}... "{meal.caption}"</span> 
    </Link>
    <button onClick={onDelete}>Delete</button> 
</li> ) 
}

export default MealCard