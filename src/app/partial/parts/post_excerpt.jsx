import React, {Component} from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import {
	Card, CardActions, CardHeader, CardMedia, CardTitle, CardText
} from 'material-ui/Card';

class PostExcerpt extends Component {
	static PropTypes = {
		post: React.PropTypes.number
	};

	static contextTypes = {
		router: React.PropTypes.object.isRequired
	};

	style = {
		button: {float: "right",marginRight: 20,marginTop: "2%"},
		title: { width: "450px" },
		text: { fontSize: "16px", padding: "24px" },
		link: { zIndex: 100 },
		header: { width: "50%" },
		card: {marginTop: "5%", padding: "3%"}
	};

	render() {
		const {post} = this.props;
		return (<Card style={this.style.card}>
			<CardActions style={this.style.button}>
				<RaisedButton label="read" primary={true}
					onClick={() => {
						this.context.router.push("/post/" + post._id)
					}}/> <br/>
			</CardActions>
			{/* <CardHeader
				style={this.style.header}
				title={post.title}
				subtitle={post.prefix}
				avatar="xxxxx" /> */}
			<CardTitle title={post.title} style={this.style.title} />
			<CardText style={this.style.text}>{post.excerpt}</CardText>
		</Card>);
	}
};
export default PostExcerpt;
