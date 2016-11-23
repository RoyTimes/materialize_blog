import React from 'react';

import Loading from './loading';

import {List, ListItem, makeSelectable} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/divider'
import FontIcon from 'material-ui/FontIcon';
import ActionLabel from 'material-ui/svg-icons/action/label';

const SelectableList = makeSelectable(List);
const NavigationMenu = React.createClass({
	PropTypes: {
		categories: React.PropTypes.array,
		history: React.PropTypes.object
	},
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},
	style: {
		drawer: {
			paddingTop: "3%"
		}, iconStyle: {
			marginRight: 24
		}
	},
	render() {
		return (
			<Drawer docked={true} containerStyle={this.style.drawer}>
				<SelectableList onChange={(evt, value) => {
					this.context.router.push(value);
				}} value={location.pathname}>
					<Subheader>Categories</Subheader>
					<ListItem
						primaryText="ALL POSTS"
						value="/posts" leftIcon={
							<FontIcon className="material-icons"
							style={this.style.iconStyles}>home</FontIcon>
					}/>
					{this.props.categories.map(item => {
						return (
							<ListItem
								primaryText={item.title}
								value={"/" + item._id + "/1"} leftIcon={
									<FontIcon className="material-icons"
									style={this.style.iconStyles}>{item.logo}</FontIcon>
							}/> );
					})}
				</SelectableList>

				<Divider /> <br />

				<SelectableList onChange={(evt, value) => {
					window.open(value);
				}}>
					<Subheader>Links</Subheader>
					<ListItem primaryText="GitHub" value="https://github.com/RoyTimes" leftIcon={<ActionLabel />} />
					<ListItem primaryText="聚力星系BBS" value="http://stzone.org" leftIcon={<ActionLabel />} />
				</SelectableList>
			</Drawer>
		);
	}
});

export default NavigationMenu;
