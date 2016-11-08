import React from 'react';
import Loading from '../parts/loading';
import PostExcerpt from '../parts/post_excerpt';

const PostList = React.createClass({

	getInitialState() {
		return {
			isReady: false, posts: [],
			error: {}
		};
	},
	componentDidMount() {
		let {category, id} = this.props.params;
		let ctx = this;

		if (category == "") {
			$.ajax({
				url: "http://localhost:8080/posts/all", method: "GET",
				success(data) {
					if (!data.status)
						ctx.setState({error: "Fetching Data Failed ... "});
					ctx.setState({
						isReady: true, posts: data.data
					});
				}
			})
		} else {
			$.ajax({
				url: "http://localhost:8080/posts//by_category", method: "GET",
				data: {id: category}, success(data) {
					if (!data.status)
						ctx.setState({error: "Fetching Data Failed ... "});
					ctx.setState({
						isReady: true, posts: data.data
					});
				}
			})
		}
	},
	render() {
		let {category, id} = this.props.params;
		if (this.state.isReady) {
			return (
				<div>
					{this.state.posts.map(post => {
						return (<PostExcerpt post={post} />);
					})}
				</div>);
		} else if (this.state.error) return <Loading title={this.state.error} />
		else return <Loading title="Loading Post List ... " />
	}

});
export default PostList;
