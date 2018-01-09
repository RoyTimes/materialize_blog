import React, {Component} from 'react';

import Paper from 'material-ui/Paper'

import Loading from '../parts/loading';
import Section from '../parts/section';
import Markdown from '../parts/markdown'

import AjaxChecker from './ajax_checker';
const server_name = "http://localhost:8080";

class Post extends Component {
	constructor () {
		super();
		this.state = {isReady: false, post: {}, error: {}};
	}

	componentDidMount() {
		fetch(server_name + "/posts/by_id?id=" + this.props.params.id).then(AjaxChecker)
		.then(res => {
			let data = res.data;
			this.setState({ isReady: true, post: data, error: res.msg });
		}).catch(err => {
			console.error(err);
		});
	}
	
	render() {

		if (this.state.isReady) {
			return (<Section><Paper><Section>
				<Markdown text={this.state.post.markdown}/>
			</Section></Paper></Section>);
		} else if (this.state.error)
			return <Loading title={this.state.error} />
		else return <Loading title="Loading Post ... " />
	}
}

export default Post;
