import React from 'react' 
import { Link } from 'react-router-dom'
import './styles/MealCard.css'


const MealCard = ({meal, onDelete}) => {

return (
    <li className="card">
        <div className="card__image">
            <img className="img" src={meal.img_src} alt=""  height="200" width="250" />
        </div>
        <div className="card__body">
            <Link to={`/meals/${meal.id}`}>
                <h2><span>{meal ? meal.location : null}</span></h2> 
            </Link>
        <h4><span>"{meal ? meal.caption : null}"</span></h4>

        <button onClick={onDelete}>Delete</button> 
        </div> 
    </li> ) 
}

export default MealCard