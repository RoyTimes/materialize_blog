import React from 'react';

import {Link} from 'react-router';
import RaisedButton from 'material-ui/lib/raised-button';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardTitle from 'material-ui/lib/card/card-title';
import CardText from 'material-ui/lib/card/card-text';

const PostExcerpt = React.createClass({
    PropTypes: {
        title: React.PropTypes.string,
        author: React.PropTypes.object,
        excerpt: React.PropTypes.string,
        redir_url: React.PropTypes.string
    },
    getDefaultProps(){
        return {
            author:{
                name: "Song Zhou",
                mark: "Original",
                avatar_url: "http://i1.tietuku.com/fe235103b0e02240.jpg"
            }
        }
    },
    style: {
        button: {
            float:"right",
            marginRight: 20,
            marginTop: "2%"
        }, title: {
            width: "450px"
        }, text: {
            fontSize: "16px",
            padding: "24px"
        }, link: {
            zIndex: 100
        }, header: {
            width:"50%"
        }
    },
    render() {
        const {author,title,excerpt,redir_url} = this.props;
        return(
        <Card>
            <CardActions style={this.style.button}>
                <Link style={this.style.link} to={redir_url}><RaisedButton label="read" primary={true}/><br/></Link>
            </CardActions>
            <CardHeader
                style={this.style.header}
                title={author.name}
                subtitle={author.mark}
                avatar={author.avatar_url}
            />
            <CardTitle title={title} style={this.style.title} />
            <CardText style={this.style.text}>{excerpt}</CardText>
        </Card>);
    }
});

export default PostExcerpt;
