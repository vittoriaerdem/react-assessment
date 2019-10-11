import React, { Component } from 'react';
import './App.css';
import Circle from '../src/components/Circle/Circle'
import CircleSelector from '../src/components/CircleSelector/CircleSelector'

class App extends Component {

  constructor() {
    super();
    this.state = {
      selected: 1
    }
  }

  changeCircle = (selectedCircle) =>{
    this.setState({
      selected: selectedCircle
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main>
        <CircleSelector 
          selected={this.state.selected}
          onChange={this.changeCircle}
        />
        <Circle 
          selected={this.state.selected}
        />
        </main>
      </div>
    );
  }
}

export default App;