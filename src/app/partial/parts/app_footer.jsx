import React from 'react';
import Section from './section';
import IconButton from 'material-ui/IconButton';
import * as Colors from './colors';

const AppFooter = React.createClass({
	style: {
		footer: {
			marginTop: "6%", marginLeft: "10%",
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
	},

	render() {

		// let url = window.location.href.split('/');
		// let length = url.length, key_index = 0;
		//
		// for (let i = 0; i < length; i ++)
		// 	if (url[i] == "#") {
		// 		key_index = i; break;
		// 	}
		//
		// let father_router = '/';
		// if (key_index != length - 1)
		// 	father_router = url[key_index + 1];
		//
		// if (father_router == "curriculum" &&
		// 		url[key_index + 3] != undefined) {
		// 	this.style.footer.paddingLeft = "22%";
		// }
		if (location.href.indexOf("admin") > 0) {
			console.log("changing size of footer");
			this.style.footer = {
				textAlign: 'center',
				backgroundColor: Colors.grey900
			}
		}

		return (
			<Section style={this.style.footer}>
				<p style={this.style.p}>Code Crafted by Song Zhou &copy; 2016</p>
				<IconButton
					iconStyle={{color: "white"}}
					iconClassName="muidocs-icon-custom-github"
					href="https://github.com/RoyTimes"
					linkButton={true}
				/>
			</Section>
		);
	}
});

export default AppFooter;
