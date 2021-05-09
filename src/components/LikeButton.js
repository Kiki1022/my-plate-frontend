import React from 'react'

class LikeButton extends React.Component {

    state = {
        likes: 0, 
        unlikes: 0
    }

    addLike = () => {
        let newCount = this.state.likes + 1
            this.setState({
                likes: newCount
            })
    }


    addUnlike = () => {
        let newCount = this.state.unlikes + 1
            this.setState({
                unlikes: newCount
            })
    }

    // state = {

    //     isToggleOn: false
    // }

    // handleClick = () => {

    //     const currentStatus = this.state.isToggleOn
    //     this.setState({
    //         isToggleOn: !currentStatus
    //     })   
    //     console.log(this.state)
    // }

    render() {
      
        return(
            <div>
                <button onClick={this.addLike} id={this.props.mealId}>{this.state.likes} ❤</button>
                <button onClick={this.addUnlike} id={this.props.mealId}>{this.state.unlikes} 👎🏼</button>
                <p></p>
                {/* <button onClick={this.handleClick} id={this.props.mealId}>{this.state.isToggleOn ? '' : "❤"}</button> */}
            </div>
        )

}

}
export default LikeButton


