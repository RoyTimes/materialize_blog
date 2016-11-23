import React from 'react';

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
import AuthorDetail from '../../parts/author_detail';

import * as Colors from '../../parts/colors';
import AjaxChecker from '../ajax_checker';

let SelectableList = makeSelectable(List);
const AdminHome = React.createClass({
	style: {
		container: {
			padding: "2%", width: "44%",
			float: "left", marginLeft: "3%",
			marginRight: "3%"
		}, innerTitle: { width: "20%" }, title: {
			color: Colors.grey700, fontSize: 20,
			textAlign: "center", marginTop: "1%"
		}, large_container: {
			padding: "2%", float: "left", width: "94%", minHeight: 300,
			marginLeft: "3%", marginRight: "3%", marginTop: "5%"
		}, toggle: { width: "80%" },
		button: { marginLeft: "15%"},
		section_title: { color: Colors.grey800},
		one_block: {
			width: "40%", float: "left", minHeight: 500,
			marginLeft: "3%", marginRight: "3%", marginBottom: "3%"
		}
	},
	getInitialState () {
		return {
			ready: false,
			author: [], category: [],
			pages: [],

			current_author: "new"
		}
	},
	contextTypes: {
		router: React.PropTypes.func.isRequired,
		server_name: React.PropTypes.String
	},
	componentDidMount () {
		let ctx = this;
		$.ajax({
			url: "http://" + ctx.context.server_name + "/author/all",
			method: "GET", success (author) {
			AjaxChecker (author);
			$.ajax ({
				url: "http://" + ctx.context.server_name + "/category/all",
				method: "GET", success (category) {
				AjaxChecker (category);
				$.ajax({
					url: "http://" + ctx.context.server_name + "/pages/all",
					method: "GET", success (pages) {
						AjaxChecker (pages);
						ctx.setState ({
							ready: true, author: author.data,
							category: category.data, pages: pages.data
						});
					}
				}) }
			}) }
		})
	},
	render() {
		if (this.state.ready)
		return (
			<Section><br/>
				<Paper style={this.style.container}>
					<Toggle
						label="Using Backend Server & Database"
						defaultToggled={true}
						style={this.style.toggle}
					/><br/><Divider/><br/>
					<TextField
						hintText="Remote Server IP/Domain Name"
						floatingLabelText="Remote Server IP/Domain Name" />
					<br/><TextField
						hintText="Remote Server Port"
						floatingLabelText="Remote Server Port" />
				</Paper>

				<Paper style={this.style.container}>
					<Toggle
						label="Password Proted Admin Panel"
						defaultToggled={true}
						style={this.style.toggle}
					/><br/><Divider/><br/>
					<TextField
						hintText="Old Password"
						floatingLabelText="Old Password" />
					<br/><TextField
						hintText="New Password"
						floatingLabelText="New Password" />
				</Paper>

				<Paper style={this.style.large_container}>

					<Paper style={this.style.one_block}>

						<SelectableList
							value={this.state.current_author}
							onChange={(evt, value) => {
								this.setState({current_author:value})
							}} >

							<Subheader>Ducumented Authors</Subheader>

							<ListItem
								value="new"
								primaryText="ADD A NEW AUTHOR"
								secondaryText=" "
								leftAvatar={<Avatar>+</Avatar>} />

							{this.state.author.map (item => {
								return (<ListItem
									value={item._id}
									primaryText={item.nick_name}
									secondaryText={item.full_name}
									leftAvatar={
										<Avatar src={item.avatar}/>}
								/>)
							})}
						</SelectableList>
					</Paper>

					<Paper style={this.style.one_block}>
						<AuthorDetail author={this.state.current_author} />
					</Paper><br/><br/>
				</Paper>

			</Section>
		);

		else {
			return (<Loading title="Loading Data ... "/>);
		}
	}


});

export default AdminHome;
