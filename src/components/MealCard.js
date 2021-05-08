import React from 'react' 
import { Link } from 'react-router-dom'



const MealCard = ({meal, handleDelete}) => { //desctructured so i can pass in handleDelete and set key/value pairs the same, allows you to return object and pull the values out of the object

    return (
        <li className="card">
            <div className="card__image">
                <img className="img" src={meal.img_src} alt=""  height="200" width="250" />
            </div>
            <div className="card__body">
                    <Link to={`/meals/${meal.id}`}>
                        <h2>{meal ? meal.location : null}</h2> 
                    </Link>
                <h4>"{meal ? meal.caption : null}"</h4>
                <button onClick={handleDelete}>Delete</button> 
            </div> 
        </li> ) 
}

export default MealCard