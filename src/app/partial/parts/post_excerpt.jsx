import React from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import {
	Card, CardActions, CardHeader, CardMedia, CardTitle, CardText
} from 'material-ui/Card';

const PostExcerpt = React.createClass({
	PropTypes: {
		post: React.PropTypes.object
	},
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},
	style: {
		button: {
			float:"right",
			marginRight: 20,
			marginTop: "2%" },
		title: { width: "450px" },
		text: { fontSize: "16px", padding: "24px"},
		link: { zIndex: 100 },
		header: { width:"50%" }
	},
	render() {
		const {post} = this.props;
		return (
			<div> <h1>This is working</h1>
			<Card>
				<CardActions style={this.style.button}>
					<RaisedButton label="read" primary={true}
						onClick={() => {
							this.context.router.push("/post/" + post._id)
						}}/> <br/>
				</CardActions>
				<CardHeader
					style={this.style.header}
					title={post.author.nick_name}
					subtitle={post.author.full_name}
					avatar={post.author.avatar} />
				<CardTitle title={post.title} style={this.style.title} />
				<CardText style={this.style.text}>{post.excerpt}</CardText>
			</Card></div>);
	}
});
export default PostExcerpt;
