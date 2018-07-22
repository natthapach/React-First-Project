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
		const {post, user} = this.state
		return (post.title) ? (
			<div>
				<h2>{post.title}</h2>
				<p>
					by <b>{user.name}</b>
				</p>
				<p>
					{post.body}
				</p>
			</div>
		) : (
			<div></div>
		)
	}
}

export default Post