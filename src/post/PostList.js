import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class PostList extends Component {
	constructor(props) {
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

	componentDidMount(){
		this.fetchPosts()	
	}

	async fetchPosts(){
		try{
			const response = await fetch('https://jsonplaceholder.typicode.com/posts')
			const posts = await response.json()
			this.setState({
				posts
			})
		}catch(error){
			console.log(error)
		}
	}

	render(){
		const itemStyle = {
			'textAlign': 'left',
			'padding': 10,
			margin: 5,
			background: '#eee'
		}
		const { posts } = this.state
		return (
			<div style={{
				paddingLeft: '20%',
				paddingRight: '20%',
			}}>
				<h1>Posts</h1>
				{
					posts.map((post, index) => (
						<Link key={index} to={'/posts/' + post.id}>
							<div style={itemStyle} className='card'>
								<b>{post.title}</b> <br/>
								{post.author}
							</div>
						</Link>					
					))
				}
			</div>
		)
	}
}

export default PostList