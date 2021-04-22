import React from 'react' 
import MealsForm from '../components/MealsForm'
import Meals from '../components/Meals'
import { connect } from 'react-redux' //connect to store
import { fetchMeals } from '../actions/fetchMeals'

class MealsContainer extends React.Component {

    componentDidMount() {
      this.props.fetchMeals()
    }

    render() {
        return (
            <div>
            <MealsForm /><br></br>
            <Meals meals={this.props.meals}/><br></br>
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