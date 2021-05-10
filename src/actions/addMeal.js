
export const addMeal = (data) => {
    console.log(data)
    
    return (dispatch) => {
      fetch('http://localhost:3000/api/v1/meals', {
          headers: {
              'Content-Type': 'application/json', 
              'Accept': 'application/json'
          }, 
          method: 'POST',
          body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(meal => dispatch({type: 'ADD_MEAL', payload: meal}))
    }

}
