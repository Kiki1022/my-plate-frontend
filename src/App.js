import React from 'react'
//import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
//import { connect } from 'react-redux' //allows to incorporate react-redux into our react application
//import { fetchMeals } from './actions/fetchMeals'
import MealsContainer from './containers/MealsContainer'


class App extends React.Component{

  //componentDidMount(){

  //}



  render() {
    return (
      <div className="App">
        <MealsContainer />
      </div>
    )
  }
}

//export default connect(null, {fetchMeals})(App);//allows access to store are props(mapstatetoprops)
export default App