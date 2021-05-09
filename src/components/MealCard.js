import React from 'react' 
import { Link } from 'react-router-dom'
import LikeButton from './LikeButton'


const MealCard = ({meal, handleDelete}) => { 
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
                <button onClick={handleDelete}>Delete</button> <br/><br/>

                <LikeButton />

            </div> 
        </li> ) 
}

export default MealCard