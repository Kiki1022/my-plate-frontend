
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

//7-10 are action objects
//thunk allows to pass and dispatch functions
   //fetchMeals is a thunk function, its allowing the passing in dispatch built in function as an argument inside action creator, 
//return action


//dispatchEvent(actionObject)
//action creator creates an action object and then action object will be dispactched 
//to our reducer which will return a newly updated state based on the action sent
//action creator creates action object which will be dispatched to reducer which will return newly updated state