import React, {Component} from 'react';

import Paper from 'material-ui/Paper';
import Toggle from 'material-ui/Toggle';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Avatar from 'material-ui/Avatar';
import {List, ListItem, makeSelectable} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

import Loading from '../../parts/loading';
import Section from '../../parts/section';

import * as Colors from '../../parts/colors';
import AjaxChecker from '../ajax_checker';

class AdminHome extends Component {
	static contextTypes = {
		router: React.PropTypes.object
	};

	constructor() {
		super();
		this.state = {val: ""};
	}

	style = {
		paper: {
			width: "50%",
			minHeight: "500px",
			margin: "5% auto"
		}, container: {
			textAlign: "center"
		}
	};


	render() {
		return (
			<Section><Paper style={this.style.paper} zDepth={5}>
			<Section style={this.style.container}>
				<TextField
					value={this.state.val}
					hintText="Password Field"
					floatingLabelText="Password"
					type="password" 
					onChange={evt => this.setState({val:evt.target.value})}	
				/> <br /><br /><br /><br /><br />
				<RaisedButton label="validate" secondary={true} onClick={evt => {
					if (this.state.val == "enter") {
						this.context.router.push ("/admin/posts");
					} else alert ("WRONG PASSWORD!");
				}}/>
			</Section></Paper></Section>
		);
	}
}
export default AdminHome;
