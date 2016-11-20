import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import {Link} from 'react-router';

import * as Colors from './colors';

import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import IconMenu from 'material-ui/IconMenu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/MenuItem';

const AppHeader = React.createClass({
	PropTypes: {
		admin: React.PropTypes.boolean
	},
	contextTypes: {
		router: React.PropTypes.func.isRequired
	},
	style: {
		appbar: {
			position: "fixed", top: 0, zIndex: 1400
		}, link: {
			textDecoration: "none"
		}, button: {
			position: "relative", paddingLeft: 16, paddingRight: 16,
			marginRight: 10, marginTop: 5,
			color: Colors.darkWhite
		}
	},

	render() {

		let title = "Blog";
		if (this.props.admin) {
			title = "Blog   Admin   Panel";

			this.style.appbar.background = Colors.grey700;
		} else {
			this.style.appbar.background = "rgb(0,188,212)"
		}

		return (<AppBar
			showMenuIconButton={false}
			style={this.style.appbar}
			title={title}
			iconElementRight={
				<div> {(() => {
					if (location.href.split('#')[1] == '/') {
						return (<div></div>);
					} else {
						return (<div>
							<FlatButton label="Admin" style={this.style.button} onTouchTap={()=>{
								this.context.router.push("/admin");
							}}/>
							<FlatButton label="Home" style={this.style.button} onTouchTap={()=>{
								this.context.router.push("/");
							}}/>
							<FlatButton label="Logout" 	style={this.style.button} onTouchTap={()=>{
								$.removeCookie("user");
								// $.cookie("user", "");
								this.context.router.push("/");
							}}/>
						</div>);
					}
				})()}</div>
			}
			zDepth={0}
		/>);
	}
});
export default AppHeader;
