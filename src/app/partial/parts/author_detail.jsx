import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import Section from './section';
import Loading from './loading';

const AuthorDetail = React.createClass ({
	PropTypes: {
		author: React.PropTypes.string
	},
	contextTypes: {
		server_name: React.PropTypes.string
	},
	getInitialState (){
		return {
			ready: false, data: {}
		}
	},
	style: {
		progress: {
			marginLeft: "33%",
			marginTop: "25%"
		}, container: {
			marginLeft: "3%"
		}, button: {

		}
	},
	componentDidMount () {
		if (this.props.author != "new") {
			$.ajax({
				
			})
		}
	},
	render () {

		if (this.props.author == "new") {
			return (
			<Section style={this.style.container}>
				<TextField
					hintText="Name"
					floatingLabelText="Name" />
				<TextField
					hintText="Avatar"
					floatingLabelText="Avatar" /> <br/><br/><br/>
				<RaisedButton label="Add New Author" primary={true}
						style={this.style.button}/>
			</Section>);
		} else {
			if (this.state.ready)
				return (
					<Section style={this.style.container}>
						{this.props.author}
					</Section>
				);
			else return <CircularProgress style={this.style.progress}
				mode="indeterminate" size={150} thickness={8} />
		}
	}
});

export default AuthorDetail;
