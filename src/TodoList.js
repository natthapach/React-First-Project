import React, { Component } from 'react'

class TodoList extends Component {

	constructor(props) {
		super(props)
		this.state = {
			todo: '',
			todos: []
		}
	}

	onChangeTodo = (event) => {
		this.setState({
			todo: event.target.value
		})
		event.preventDefault();
	}
	onSubmitTodo = (event) => {
		this.state.todos.push(this.state.todo)
		this.setState({
			// todos: this.state.todos,
			todo: '',
		})
		event.preventDefault();
	}

	render() {
		console.log('query', this.props.location.search)
		console.log('params', this.props.match.params)
		return (
			<div>
				<h1>Todo</h1>
				<ul>
					{
						this.state.todos.map((todo, index) => (
							<li key={index}>{todo}</li>
						))
					}
				</ul>
				<form>
					<input type='text' value={this.state.todo} onChange={this.onChangeTodo} />
					<button type='submit' onClick={this.onSubmitTodo}>Submit</button>
				</form>

			</div>
		)
	}
}

export default TodoList