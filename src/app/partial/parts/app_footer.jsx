import React, {Component} from 'react';
import Section from './section';
import IconButton from 'material-ui/IconButton';
import * as Colors from './colors';

class AppFooter extends Component {

	static contextTypes = {
		router: React.PropTypes.object
	};
	
	style = {
		footer: {
			marginTop: "8%", marginLeft: "10%",
			marginRight: "0%", marginBottom: "3%",
			textAlign: 'center',
			backgroundColor: Colors.grey900,
		}, a: {
			color: "darkWhite"
		}, p: {
			margin: '0 auto',
			padding: 0,
			color: Colors.lightWhite,
			maxWidth: 335
		}
	};

	render() {
		
		if (this.context.router.isActive("admin")) {
			this.style.footer = {
				textAlign: 'center',
				backgroundColor: Colors.grey900
			}
		}
		return (
			<Section style={this.style.footer}>
				<p style={this.style.p}>Code Crafted by Song Zhou &copy; 2018</p>
				<IconButton
					iconStyle={{ color: "white" }}
					iconClassName="muidocs-icon-custom-github"
					href="https://github.com/RoyTimes"
					linkButton={true}
				/>
			</Section>
		);
	}
}
export default AppFooter;
