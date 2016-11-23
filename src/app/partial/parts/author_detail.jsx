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
		server_name: React.PropTypes.string,
		router: React.PropTypes.object
	},
	getInitialState (){
		return {
			ready: false, data: {
				nick_name: "",
				full_name: "",
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
		}, button: { }
	},

	componentDidUpdate () {
		if (this.props.author != "new") {
			let ctx = this;
			alert (this.props.author);
			$.ajax({
				url: "http://" + ctx.context.server_name + "/author/by_id",
				data: {id: this.props.author}, success (data) {
					AjaxChecker (data);
					console.log(data);
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
				alert(data.msg);
				ctx.context.router.push("/admin");
			}
		});
	},
	render () {

		if (this.props.author == "new") {
			return (
			<Section style={this.style.container}>
				<TextField
					value={this.state.data.nick_name}
					hintText="Nick Name"
					floatingLabelText="Nick Name"
					onChange={(evt) => {
						let data = this.state.data;
						data.nick_name = evt.target.value;
						this.setState ({data: data});
					}} /> <br/>
				<TextField
					value={this.state.data.full_name}
					hintText="Full Name"
					floatingLabelText="Full Name"
					onChange={(evt) => {
						let data = this.state.data;
						data.full_name = evt.target.value;
						this.setState ({data: data});
					}} /> <br/>
				<TextField
					value={this.state.data.avatar}
					hintText="Avatar"
					floatingLabelText="Avatar"
					onChange={(evt) => {
						let data = this.state.data;
						data.avatar = evt.target.value;
						this.setState ({data: data});
					}} /> <br/><br/><br/>
				<RaisedButton
					label="Add New Author" primary={true}
					style={this.style.button} onTouchTap={this.creatNew}/>
			</Section>);
		} else {
			if (this.state.ready) {
				return (
					<Section style={this.style.container}>
						<TextField
							value={this.state.data.nick_name}
							hintText="Nick Name"
							floatingLabelText="Nick Name"
							onChange={(evt) => {
								let data = this.state.data;
								data.nick_name = evt.target.value;
								this.setState ({data: data});
							}} />
						<TextField
							value={this.state.data.full_name}
							hintText="Full Name"
							floatingLabelText="Full Name"
							onChange={(evt) => {
								let data = this.state.data;
								data.full_name = evt.target.value;
								this.setState ({data: data});
							}} />
						<TextField
							value={this.state.data.avatar}
							hintText="Avatar"
							floatingLabelText="Avatar"
							onChange={(evt) => {
								let data = this.state.data;
								data.avatar = evt.target.value;
								this.setState ({data: data});
							}} /> <br/><br/><br/>
						<RaisedButton
							label="Add New Author" primary={true}
							style={this.style.button} onTouchTap={this.creatNew}/>
					</Section>
				);
			} else return <CircularProgress style={this.style.progress}
				mode="indeterminate" size={150} thickness={8} />
		}
	}
});

export default AuthorDetail;
