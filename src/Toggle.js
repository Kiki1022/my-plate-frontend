class Toggle extends React.Component{

    state = {

        isToggleOn: false
    }

    handleClick = () => {

        const currentStatus = this.state.isToggleOn
        this.setState({
            isToggleOn: !currentStatus
        })   
        console.log(this.state)
    }

    render() {
      
        return(
            <div>
              
                <p></p>
                <button onClick={this.handleClick} id={this.props.mealId}>{this.state.isToggleOn ? '' : "❤"}</button>
            </div>
        )

}

}