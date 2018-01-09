import React, {Component} from 'react';
import Loading from '../parts/loading';
import PostExcerpt from '../parts/post_excerpt';

import AjaxChecker from './ajax_checker';
import config from '../../config.json';
const server_name = "http://localhost:8080";

class PostList extends Component {
	constructor () {
		super();
		this.state = {isReady:false, posts: [], error: {}};
	}

	componentDidMount () {
		let {category, id} = this.props.params;
		
		if ( !category ) {
			fetch(server_name + "/posts/all").then(AjaxChecker)
			.then(res => {
				let data = res.data;
				this.setState({ isReady: true, posts: data, error: res.msg });
			}).catch(err => {
				console.error(err);
			});
		} else {
			fetch(server_name + "/posts/by_category?id=" + category).then(AjaxChecker)
			.then(res => {
				let data = res.data;
				this.setState({ isReady: true, posts: data, error: res.msg });
			}).catch(err => {
				console.error(err);
			});
		}
	}

	render () {
		let {category, id} = this.props.params;
		if (this.state.isReady) {
			return (<div>
				{this.state.posts.map ((post, index) => {
					return (<PostExcerpt post={post} key={index}/>);
				})}
			</div>);
		} else if (this.state.error)
			return <Loading title={this.state.error} />
		else return <Loading title="Loading Post List ... " />
	}
}
export default PostList;
