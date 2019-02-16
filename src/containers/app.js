import React, { Component } from 'react';
import * as API from '../api';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            stories: []
        };
    }

    componentDidMount() {
        API.fetchTopStoryIds(10)
            .then(ids => API.fetchStories(ids))
            .then(stories => this.setState({stories}));
    }

    render() {

        return (
            <div >
                <ul>
                    {this.state.stories.map((story) =>
                        <li key={story.id}>
                            {story.title}
                        </li>
                    )}
                </ul>
            </div >
        )
    };

}
export default App;
