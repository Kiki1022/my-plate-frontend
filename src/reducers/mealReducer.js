
export default function mealReducer(state = {meals: []}, action) {
    
    switch (action.type) {
        
    case 'FETCH_MEALS':

    return {meals: action.payload}
    
    case 'ADD_MEAL':
     
        return{...state, meals: [...state.meals, action.payload]}
    
    case 'DELETE_MEAL':
      
        let meals = state.meals.filter(meal => meal.id !== action.payload)
        return {...state, meals}

    default:
        return state
    }
}