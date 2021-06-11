import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    numQuestions: 0,
    numCorrect: 0
  }
  
  anwser = (choice) => {
    this.setState( (currentState) => ({
    	numQuestions: currentState.numQuestions + 1,
      	numCorrect: currentState.numCorrect + (choice ? 1 : 0)
    }))
  }
  
  render() {
    let value1 = Math.floor(Math.random() * 100),
          value2 = Math.floor(Math.random() * 100),
          value3 = Math.floor(Math.random() * 100),
          proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3,
          result = (proposedAnswer === (value1 + value2 + value3));
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math - Ameziani lol</h2>
          <div className="equation">
            <p className="text">{`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}</p>
          </div>
          <button onClick={() => this.anwser(result === true)}>True</button>
          <button onClick={() => this.anwser(result === false)}>False</button>
          <p className="text">
            Your Scores: {this.state.numCorrect}/{this.state.numQuestions}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
