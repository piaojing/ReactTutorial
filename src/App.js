import React, { Component } from 'react'

class App extends Component{
  render(){
    return <Board/>
  }
}

class Board extends Component{
  renderSquare(i){
    return <Square value={i}/>
  }
}

class Square extends Component{
  render(){
    return(
      <button className="square">{this.props.value}</button>
    )
  }
}

export default App;