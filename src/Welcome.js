import React, { Component } from 'react'

class Welcome extends Component {
	constructor(props) {
		super(props)
		this.state = {
			now: new Date().toLocaleString()
		}
		
		setInterval(this.tick, 1000)
	}

	tick = () => {
		this.setState({
			now: new Date().toLocaleString()
		})
	}

	showMe = () => {
		alert('natthapach!')
	}

	render() {
		return (
			<div>
				<h1>Hello, {this.props.name}</h1>
				<p>This time is {this.state.now}</p>
				<button onClick={this.showMe}>Click me!</button>
			</div>
		)
	}
}

export default Welcome