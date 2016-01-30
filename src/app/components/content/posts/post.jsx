import React from 'react';

import MarkdownElement from '../../partial/MarkdownElement';
import Loading from '../../partial/loading';

// let MarkdownText = "Load Failed!";
const Post = React.createClass({
    PropTypes: {
        post: React.PropTypes.object
    },
    getInitialState() {
        return {
            loaded: false,
            MarkdownText: "Failed"
        };
    },
    componentDidMount(){
        let that = this;
        $.ajax({
            type: "GET",
            url: `https://raw.githubusercontent.com/RoyTimes/markdown/master${this.props.post.markdown}.md`,
            success: function(data){
                if (that.isMounted())
                    that.setState({loaded: true, MarkdownText:data})
            }
        });
    },
    render(){
        if (!this.state.loaded) {
            return(
                <Loading title="Doing Ajax! Trying hard to load post!" />);
        }
        return (<MarkdownElement text={this.state.MarkdownText} />);
    }
});

export default Post
