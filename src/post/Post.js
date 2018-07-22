import React, { Component } from 'react'

class Post extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	componentDidMount(){
		this.fetchPost(this.props.match.params.id)
	}
	async fetchPost(id){
		try{
			const responseP = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
			const post = await responseP.json()
			const responseU = await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
			const user = await responseU.json()
			this.setState({
				...post,
				user
			})
		}catch(error){
			console.log(error)
		}
	}

	onChangeTitle = (event) => {
		this.setState({
			title: event.target.value
		})
		event.preventDefault()
	}

	onChangeBody = (event) => {
		this.setState({
			body: event.target.value
		})
		event.preventDefault()
	}

	onSubmitForm = (event) => {
		console.log('submit')
		fetch(`https://jsonplaceholder.typicode.com/posts/${this.state.id}`,{
			method: 'PUT',
			body: JSON.stringify({
				id: this.state.id,
				title: this.state.title,
				body: this.state.body,
			}),
			headers: {
				"Content-type": "application/json; charset=UTF-8"
			}
		})
		.then(response => response.json())
		.then(post => {
			console.log('put', post)
			alert('Edit complete')
		})
		event.preventDefault()
	}

	render() {
		const cardStyle = {
			'textAlign': 'left',
			'padding': 10,
			margin: 5,
			background: '#eee',
			marginTop: '50px',
			marginLeft: '25%',
			marginRight: '25%'
		}
		const {title, body, user} = this.state
		return (title) ? (
			<div className='card' style={cardStyle}>
				<form onSubmit={this.onSubmitForm}>
					<div className='form-group'>
						<label htmlFor='title'>Title</label>
						<input onChange={this.onChangeTitle} className='form-control' type='text' value={title} id='title'/>
					</div>
					<div className='form-group'>
						<label htmlFor='body'>Body</label>
						<textarea onChange={this.onChangeBody} rows={5} className='form-control' type='text' value={body} id='body'/>
					</div>
					<button className='btn btn-success' type='submit'>Submit</button>
				</form>
			</div>
		) : (
			<div></div>
		)
	}
}

export default Post