import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome'
import Counter from './Counter'
import TodoList from './TodoList'
import PostList from './post/PostList'
import Post from './post/Post'

// function Welcome(props){
//   return <h1>Hello, {props.name}</h1>;
// }

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
			posts: [
				{
					author: 'John',
					title: 'Hello1',
					content: '111111111111111111111111111111111111111',
				},
				{
					author: 'Alice',
					title: 'Hello2',
					content: '22222222222222222222222222222222222222',
				},
				{
					author: 'Bob',
					title: 'Hello3',
					content: '333333333333333333333333333333333333333'
				}
			]
		}
  }

  render() {
    const message = 'Hello Natthapach'
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{message}</h1>
          
        </header>
        
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link className='navbar-brand' to='/'>Home</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className='nav-item nav-link active' to='/welcome'>Welcome</Link>
              <Link className='nav-item nav-link active' to='/todo'>Counter</Link>
              <Link className='nav-item nav-link active' to='/todo/1'>Todo</Link>
              <Link className='nav-item nav-link active' to='/posts'>Posts</Link>
            </div>
          </div>
        </nav>
        <Switch>
          <Route path='/welcome' component={Welcome}/>
          <Route path='/todo' exact component={Counter}/>
          <Route path='/todo/:id' component={TodoList}/>
          <Route path='/posts' exact component={PostList}/>
          <Route path='/posts/:id' component={Post}/>
          }/>
          <Route component={Welcome}/> {/* default case */}
        </Switch>
        {/* <Welcome name='natthapach' login={false}/>
        <Counter/>
        <TodoList/> */}
      </div>
    );
  }
}

export default App;
