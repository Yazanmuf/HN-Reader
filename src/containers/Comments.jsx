import React, { Component } from 'react';
import * as API from '../api';

class Comments extends Component {

    constructor(props) {
        super(props);

        this.state = {
            comments: []
        };
    }


    //Figure this out! getting a list of all the comments, how to create a function that loops through them all then adds them to component state
    componentDidMount() {
        const arrayOfComments = this.props.comments;
        console.log('component did mount should see list of comments', arrayOfComments);
        arrayOfComments.map(id => API.fetchComment(id).then(result => console.log(result)))
        // this.setState({ comments: arrayOfComments })
    }

    render() {
        const { comments } = this.state
        return (
            < p > comments go here</p >
        )
    }
}


export default Comments;