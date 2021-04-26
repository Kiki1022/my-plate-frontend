export const deleteMeal = (mealId) => {

    return (dispatch) => {
        return fetch(`http://localhost:3000/api/v1/meals/${mealId}`, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(meal => dispatch({type: 'DELETE_MEAL', payload: meal})) //having problem parsing the json out of it
    }

}