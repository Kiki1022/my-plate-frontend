
export const deleteMeal = (mealId) => {

    return (dispatch) => {
        return fetch(`http://localhost:3000/api/v1/meals/${mealId}`, {
            method: 'DELETE'
        })
        .then(()=> dispatch({type: 'DELETE_MEAL', payload: mealId}) )
    }

}