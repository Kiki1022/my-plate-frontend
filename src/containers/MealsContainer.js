import React from 'react' 
import MealsForm from '../components/MealsForm'
import {Route, Switch} from 'react-router-dom'
import Meals from '../components/Meals'
import { connect } from 'react-redux' //connect to store
import { fetchMeals } from '../actions/fetchMeals'
import Meal from '../components/Meal'
import NavBar from '../components/NavBar'
import Welcome from '../components/Welcome'




class MealsContainer extends React.Component {

    componentDidMount() {
      this.props.fetchMeals()
    }

    render() {
        return (
            <div>
                <NavBar />
              {/* <Switch> */}
                    <Route exact path='/' component={Welcome} />

                    <Route exact path='/meals/new' component={MealsForm} />
                 
                    <Route exact path='/meals/:id' render={(routerProps) => <Meal {...routerProps} meals={this.props.meals} />} />
            
                    <Route exact path='/meals' render={(routerProps) => <Meals {...routerProps} meals={this.props.meals} />} />
                {/* </Switch>  */}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        meals: state.meals 
    }
}

export default connect(mapStateToProps, {fetchMeals})(MealsContainer)
//to see info we need to use mapStateToProps
//first argument in connect means we want to get your redux store and map it 