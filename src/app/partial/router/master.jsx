import React, {Component} from 'react';

import AppHeader from '../parts/app_header';
import AppFooter from '../parts/app_footer';
import Loading from '../parts/loading';
import NavigationMenu from '../parts/navigation_menu';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import AjaxChecker from './ajax_checker';
import config from '../../config.json';
const server_name = "http://localhost:8080";

class Master extends Component {

	static childContextTypes = {
		muiTheme: React.PropTypes.object
	};

	static contextTypes = {
		router: React.PropTypes.object
	};

	getChildContext() {
		return {
			muiTheme: this.state.muiTheme
		};
	}; 

	componentWillMount() {
		this.setState({
			muiTheme: getMuiTheme()
		});
	};

	style = {
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
	};

	constructor () {
		super();
		this.state = { isReady: false, error: "", categories: [] };
	};

	componentDidMount() {
		fetch(server_name + "/category/all").then(AjaxChecker)
			.then(res => {
				let data = res.data;
				this.setState({ isReady: true, categories: data, error: res.msg });
		}).catch (err => {
			console.error(err);
		});
	};

	render () {
		if (this.state.isReady) {
			if (this.context.router.isActive('admin')) {
				return (
					<div>
						<AppHeader admin={true} />
						{this.props.children}
						<AppFooter />
					</div>);
			} else {
				return (<div>
					<AppHeader admin={false} />
					<NavigationMenu
						categories={this.state.categories} />
					<div style={this.style.container}>
						{this.props.children}
					</div>
					<AppFooter />
				</div>)
			}
		} else if (this.state.error)
			return <Loading title={this.state.error} key="err_master" />;
		else return <Loading title="Loading Content ... " key="loading_master" />;
	}
}
export default Master;

