import React, { Component } from 'react'

class Post extends Component {
	constructor(props) {
		super(props)
		this.state = {
			post: {

			},
			user: {

			}
		}
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
				post,
				user
			})
		}catch(error){
			console.log(error)
		}
		
	}

	render() {
		

		return (
			<div>
				<h2>{this.state.post.title}</h2>
				<p>
					by <b>{this.state.user.name}</b>
				</p>
				<p>
					{this.state.post.body}
				</p>
			</div>
		)
	}
}

export default Post