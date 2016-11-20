import React from 'react';

import AppHeader from '../parts/app_header';
import AppFooter from '../parts/app_footer';
import Loading from '../parts/loading';
import NavigationMenu from '../parts/navigation_menu';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import AjaxChecker from './ajax_checker';
import config from '../../config.json';
const server_name = config.remote_server + ":" + config.remote_port;

const Master = React.createClass({

	/* something about new material_ui: you need to create a muiTheme
	which is totally fucking useless */
	childContextTypes: {
		muiTheme: React.PropTypes.object,
		server_name: React.PropTypes.string
	},

	getChildContext() {
		return {
			muiTheme: this.state.muiTheme,
			server_name: server_name
		};
	},
	componentWillMount () {
		this.setState({
			muiTheme: getMuiTheme()
		});
	},
	// END OF BS

	style: {
		container: {
			marginTop: "7%", marginLeft: "22%",
			marginRight: "2%", marginBottom: "3%",
		}, drawer: {
			paddingTop: "6%"
		}, iconStyle: {
			marginRight: 24
		}, footer: {
			marginTop: "7%", marginLeft: "18%",
			marginRight: "2%", marginBottom: "3%"
		}
	},
	getInitialState() {
		return {isReady: false, error: "", categories: []};
	},
	componentDidMount() {
		let ctx = this;
		$.ajax({
			url: "http://" + server_name + "/category/all",
			method: "GET", success (data) {
				AjaxChecker (data);
				ctx.setState({isReady: true, categories: data.data});
			}
		});
	},
	render() {
		if (this.state.isReady){
			return (<div>


				{(() => {
					if (location.href.indexOf("admin") < 0) {
						return (
						<div>
							<AppHeader admin={false} />
							<NavigationMenu
								categories={this.state.categories} />

							<div style={this.style.container}>
								{this.props.children}
							</div>

							<AppFooter />
						</div>);
					} else {
						return (
							<div>
								<AppHeader admin={true}/>
								{this.props.children}
								<AppFooter />
							</div>);
					}
				})()}
			</div>);
		} else if (this.state.error)
			return <Loading title={this.state.error}/>;
		else return <Loading title="Loading Content ... "/>;
	}
});


// {this.props.children}
//
export default Master;
