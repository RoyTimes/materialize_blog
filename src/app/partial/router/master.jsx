import React from 'react';

import AppHeader from '../parts/app_header';
import AppFooter from '../parts/app_footer';
import Loading from '../parts/loading';
import NavigationMenu from '../parts/navigation_menu';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const Master = React.createClass({

	/* something about new material_ui: you need to create a muiTheme
	which is totally fucking useless */
	childContextTypes: {
		muiTheme: React.PropTypes.object
	},
	getChildContext() {
		return {muiTheme: this.state.muiTheme};
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
			url: "http://localhost:8080/category/all", method: "GET",
			success (data) {
				if (!data.status) ctx.setState({error: "Loading Data Failed .. "})
				ctx.setState({isReady: true, categories: data.data});
			}
		});
	},
	render() {
		if (this.state.isReady){
			return (<div>
				<AppHeader title="Blog"></AppHeader>

				{(() => {
					if (location.href.indexOf("admin") < 0) {
						return (
						<div>
							<NavigationMenu
							categories={this.state.categories}
							history={this.props.history}/>

							<div style={this.style.container}>
								{this.props.children}
							</div>

							<AppFooter />
						</div>);
					} else {
						return (
							<div>
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
