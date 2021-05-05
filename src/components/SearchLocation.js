import React from "react"

class SearchLocation extends React.Component{
 
    handleSubmit = (event) => {
        event.preventDefault()
        this.props.handleLocation(document.getElementById("location").value)
    }
    
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Search by a Location" id="location"/>
                    <input type="submit" />
            </form>
        )
    }
}
export default SearchLocation