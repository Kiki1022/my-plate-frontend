import React from 'react' 
import {Route, Switch} from 'react-router-dom'
import { connect } from 'react-redux' //connect to store
import { fetchMeals } from '../actions/fetchMeals'
import MealsForm from '../forms/MealsForm'
import Meals from './Meals'
import Meal from '../components/Meal'
import NavBar from '../static/NavBar'
import Welcome from '../static/Welcome'


class MealsContainer extends React.Component {

    componentDidMount() {
      this.props.fetchMeals()
    }

    render() {
        return (
            <div>
                <NavBar />
                    <Switch>
                            <Route exact path='/' component={Welcome} />

                            <Route exact path='/meals/new' component={MealsForm} />
                        
                            <Route exact path='/meals/:id' render={(routerProps) => <Meal {...routerProps} meals={this.props.meals} />} />
                    
                            <Route exact path='/meals' render={(routerProps) => <Meals {...routerProps} meals={this.props.meals} />} />
                        </Switch> 
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        meals: state.meals 
    }
}
export default connect(mapStateToProps,{fetchMeals})(MealsContainer)
