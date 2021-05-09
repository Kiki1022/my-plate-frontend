import React from "react"

class SearchLocation extends React.Component{
 
    state = {
        value: ''
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.handleLocation(this.state.value)
        this.setState({

            value:''
        })
    }
    
    handleOnChange = (event) => {
        this.setState({
            value: event.target.value
        }) 
    }
    // {(e) => this.setState({value: e.target.value})}

    render(){
        return(
            <form className="search-bar" onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.value} onChange={this.handleOnChange} placeholder="Search by a Location" id="location"/>
                   <button type="submit">Search</button> 
            </form>
        )
    }
}
export default SearchLocation