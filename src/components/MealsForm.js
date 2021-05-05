import React from 'react' 
import { connect } from 'react-redux'
import { addMeal } from '../actions/addMeal'
import { Redirect } from 'react-router-dom'


class MealsForm extends React.Component {

    constructor(props){
        super(props)

    this.state = {
            location: '',
            caption: '',
            img_src: '',
            submitted: false //if not submitted, initialize and show the form
            }
        }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addMeal(this.state)
        this.setState({
            submitted: true //if true redirect to /meals 
        })
    }

    render() {
        return this.state.submitted ? <Redirect to='/meals' /> : (
            
            <div className="meal-form">
              <form onSubmit={this.handleSubmit}>
                  <label>Location </label>
                  <input type="text" placeholder="" value={this.state.location} name="location" onChange={this.handleChange}/><br></br><br></br>
                  <label>Description </label>
                  <input type="text" placeholder="" value={this.state.caption} name="caption" onChange={this.handleChange}/><br></br><br></br>
                  
                  <label>Image </label>
                  <input id='img-src' type="text" value={this.state.img_src} name="img_src" onChange={this.handleChange}/><br></br><br></br>
                    
                <input type="submit" />
              </form>
            </div>
        )
    }

}

export default connect(null,{addMeal})(MealsForm)