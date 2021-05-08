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
    
    render(){
        return(
            <form className="search-bar" onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.value} onChange={(e) => this.setState({value: e.target.value})} placeholder="Search by a Location" id="location"/>
                   <button type="submit">Search</button> 
            </form>
        )
    }
}
export default SearchLocation