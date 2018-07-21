import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome'
import Counter from './Counter'
import TodoList from './TodoList'

// function Welcome(props){
//   return <h1>Hello, {props.name}</h1>;
// }

class App extends Component {
  render() {
    const message = 'Hello Natthapach'
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{message}</h1>
          
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          
        </p>
        <Welcome name='natthapach' login={false}/>
        <Counter/>
        <TodoList/>
      </div>
    );
  }
}

export default App;
