import React from 'react'
//import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux' //allows to incorporate react-redux into our react application
import { fetchMeals } from './actions/fetchMeals'
//import {createStore, applyMiddleware, compose} from 'redux'
//import mealReducer from './reducers/mealReducer'

class App extends React.Component{

  componentDidMount(){
    this.props.fetchMeals({type: 'FETCH_MEALS', payload: {name: 'Vegan'}})
  }



  render() {
    return (
      <div className="App">
        APP!!!
      </div>
    )
  }
}
// const mapStateToProps = () => {
//     return {
//       meals: state.meals
//     }
// }
//let store = createStore(mealReducer) // createStore takes the reducer reducer as an argument
//store.dispatch({ type: '@@INIT' })
export default connect(null, {fetchMeals})(App);//allows access to store are props(mapstatetoprops)
//store.dispatch({type: 'FETCH_MEALS', payload: {name: 'Vegan'}})