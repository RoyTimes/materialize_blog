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
		title: React.PropTypes.string
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

		return (<AppBar
			showMenuIconButton={false}
			style={this.style.appbar}
			title={this.props.title}
			iconElementRight={
				<div>
					{(() => {
						if (location.href.split('#')[1] == '/') {
							return (<div></div>);
						} else {
							return (<div>
								<FlatButton label="Home" style={this.style.button} onTouchTap={()=>{
									location.href = "/";}}/>
								<FlatButton label="Logout" style={this.style.button} onTouchTap={()=>{
									$.removeCookie("user");
									// $.cookie("user", "");
									location.href = "/";
								}}/>
							</div>);}
					})()}
				</div>
			}
			zDepth={0}
		/>);
	}
});
export default AppHeader;
