import React from 'react';
import MarkdownElement from '../../partial/MarkdownElement';

const About = React.createClass({
	render() {
		let MarkdownText = require('./about.md');
		console.error(MarkdownText);
		return (<MarkdownElement text={MarkdownText}/>);
	}
});

export default About;
