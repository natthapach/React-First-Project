import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class PostList extends Component {
	constructor(props) {
		super(props)
		this.state = {
			posts: [],
			searchTitle: this.props.location.search.title || ''
		}
		console.log('sss')
	}

	componentDidMount(){
		this.fetchPosts()	
	}

	async fetchPosts(title){
		try{
			const url = (title && title!=='')?`https://jsonplaceholder.typicode.com/posts?title=${title}`:'https://jsonplaceholder.typicode.com/posts'
			const response = await fetch(url)
			const posts = await response.json()
			this.setState({
				posts
			})
		}catch(error){
			console.log(error)
		}
	}

	onSearchChage = (event) => {
		this.setState({
			searchTitle: event.target.value
		})
		event.preventDefault()
	}

	onClickSearch = (event) => {
		this.fetchPosts(this.state.searchTitle)
		// event.preventDefault()
	}

	render(){
		const itemStyle = {
			'textAlign': 'left',
			'padding': 10,
			margin: 5,
			background: '#eee'
		}
		const { posts, searchTitle } = this.state
		return (
			<div style={{
				paddingLeft: '20%',
				paddingRight: '20%',
			}}>
				<h1>Posts</h1>
				<form className="form-inline" style={{margin:5}}>
					<input className="form-control mr-sm-2" onChange={this.onSearchChage} value={searchTitle} type="search" placeholder="Search" aria-label="Search"/>
					<Link className='btn btn-success' to={(searchTitle!=='')?`/posts?title=${searchTitle}`:'/posts'} onClick={this.onClickSearch}>
						Search
					</Link>
				</form>
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