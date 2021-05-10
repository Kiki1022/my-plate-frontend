
export function fetchMeals() {
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/meals')
        .then(resp => resp.json())
        .then(meals => dispatch({
            type: 'FETCH_MEALS', 
            payload: meals
        }))
    }
}

