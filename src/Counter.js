import React, { Component } from 'react'

class Counter extends Component {

	constructor(props) {
		super(props)
		this.state = {
			count: 0,
			name: '',
		}
	}

	increase = () => {
		this.setState({
			count: this.state.count + 1
		})
	}

	changeText = (event) => {
		this.setState({
			name: event.target.value
		})
	}

	render() {
		return (
			<div>
				<h1>Counter</h1>
				<p>{this.state.count}</p>
				<button onClick={this.increase}>Count</button>
				<p>{this.state.name}</p>
				{/* <input type='text' value={this.state.name} onChange={this.changeText} /> */}
			</div>
		)
	}
}

export default Counter