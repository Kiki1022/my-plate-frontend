import React from 'react' 
import { connect } from 'react-redux'
import { addMeal } from '../actions/addMeal'
//needs to be a class b/c it is a form and will have state..local or global state

class MealsForm extends React.Component {

    constructor(props){
        super(props)
    this.state = {
            location: '',
            caption: '',
            img_src: ''
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
            location: '',
            caption: '',
            img_src: ''  
        })

    }

    render() {
        return (
            <div>
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

export default connect(null, {addMeal})(MealsForm)