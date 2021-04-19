import React from 'react'


class App extends React.Component{

  componentDidMount(){
    fetch('http://localhost:3000/api/v1/meals')
    .then(resp => resp.json())
    .then(data => console.log(data))
  }



  render() {
    return (
      <div className="App">
        APP!!!
      </div>
    )
  }
}

export default App;
