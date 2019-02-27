import React, { Component } from 'react'
import Comment from './Comment';

const StoryView = props => {
    console.log(props)
    // const { by } = props.story;

    return (
        <div>
            <p><b>Title: </b>{props.story.title}</p>
            <p><b>Author:</b> {props.story.by}</p>
            <p><b>url: </b>{props.story.url}</p>
            <br />
            <Comment comments={props.story.kids} />

        </div>
    )
}


export default StoryView;