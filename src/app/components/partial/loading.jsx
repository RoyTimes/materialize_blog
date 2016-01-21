import React from 'react';
import CircularProgress from 'material-ui/lib/circular-progress';
import Paper from 'material-ui/lib/paper'

const Loading = React.createClass({
	PropTypes: {
		title: React.PropTypes.string
	},
	style: {
        progress: {
            marginTop: "12%",
            marginLeft: "44%"
        }, paper:{
            height: 600
        }, text: {
			fontWeight: "normal",
            color: "#757575",
            marginTop: 50,
            textAlign: "center"
        }
    },
	render() {
		return (
			<Paper zDepth={4} style={this.style.paper}>
				<br/><br/><h1 style={this.style.text}>{this.props.title}</h1>
				<CircularProgress style={this.style.progress}mode="indeterminate" size={2}/>
			</Paper>
		);
	}
});
export default Loading;
