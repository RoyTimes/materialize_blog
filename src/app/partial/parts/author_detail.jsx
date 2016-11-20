import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import AjaxChecker from '../router/ajax_checker';
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
			ready: false, data: {
				name: "",
				avatar: ""
			}
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
			let ctx = this;
			$.ajax({
				url: "http://" + ctx.context.server_name + "/author/by_id",
				data: {id: this.props.author}, success (data) {
					AjaxChecker (data);
					ctx.setState({ready: true, data: data.data});
				}
			});
		}
	},
	creatNew () {
		let ctx = this;
		$.ajax ({
			url: "http://" + ctx.context.server_name + "/author/add",
			method: "POST", data: this.state.data, success(data) {
				alert(data);
			}
		});
	},
	render () {

		if (this.props.author == "new") {
			return (
			<Section style={this.style.container}>
				<TextField
					value={this.state.data.name}
					hintText="Name"
					floatingLabelText="Name"
					onChange={(evt) => {
						let data = this.state.data;
						data.name = evt.target.value;
						this.setState ({data: data});
					}}
				/>
				<TextField
					value={this.state.data.avatar}
					hintText="Avatar"
					floatingLabelText="Avatar"
					onChange={(evt) => {
						let data = this.state.data;
						data.avatar = evt.target.value;
						this.setState ({data: data});
					}}
				/> <br/><br/><br/>
				<RaisedButton
					label="Add New Author" primary={true}
					style={this.style.button} onTouchTap={this.creatNew}/>
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
