import React, { Component } from 'react';
import * as API from '../api';

class Comments extends Component {

    constructor(props) {
        super(props);

        this.state = {
            comments: []
        };
    }


    componentDidMount() {
        const arrayOfComments = this.props.comments;
        //Added this console.log and a bunch of things worked. I suspect it's because of asynchronous stuff happening in the parent container. 
        console.log(arrayOfComments)
        const textOfComments = [];
        // console.log('component did mount should see list of comments', arrayOfComments);
        arrayOfComments.map(id => API.fetchComment(id).then(result => textOfComments.push(result)))
        this.setState({ comments: textOfComments })
    }

    render() {
        //Looks like the comment list only has the first comment and NOT it's kids. will resolve this in individual comment component. 
        const { comments } = this.state
        console.log('RENDER COMMENT LIST OF EACH STORY', comments)
        return (
            <p>comment goes here</p>
            // < p > {comments[0].text}</p >
        )
    }
}


export default Comments;