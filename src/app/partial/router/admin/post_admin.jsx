import React from 'react';

import Paper from 'material-ui/Paper';

const PostAdmin = React.createClass({
	style: {
		container: {
			margin: "3%", backGround: "red", height: 500
		}
	},
	render() {
		return (
			<Paper style={this.style.container}> </Paper>
		);
	}


});

export default PostAdmin;
