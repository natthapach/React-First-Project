import React, { Component } from 'react'
import moment from 'moment'

class Welcome extends Component {
	constructor(props) {
		super(props)
		this.state = {
			now: moment(new Date).format('YYYY-MM-dd ?? HH:mm:ss Z')
		}
		
		setInterval(this.tick, 1000)
	}

	tick = () => {
		this.setState({
			now: moment(new Date).format('YYYY-MM-DD ?? HH:mm:ss Z')
		})
	}

	showMe = () => {
		alert('natthapach!')
	}

	render() {
		return (
			<div>
				<h1>Hello, {this.props.name}</h1>
				{
					(this.props.login)?(
						<h2>Log in</h2>
					):(
						<h2>Sign in!</h2>
					)
				}
				{
					this.props.login && <h2>Login</h2> || <h2>Sign in!</h2>
				}
				<p><b>This time is</b> {this.state.now}</p>
				<button onClick={this.showMe}>Click me!</button>
			</div>
		)
	}
}

export default Welcome