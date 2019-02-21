import React, { Component } from 'react';
import * as API from '../api';
import StoryView from './StoryView';

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
            .then(stories => this.setState({ stories }));
    }

    render() {
        // console.log(this.state.stories)
        const { stories } = this.state
        return (
            <div >
                <ul>
                    <li>
                        {stories.map((story, i) => {
                            return (
                                <StoryView
                                    key={i}
                                    story={story}
                                />
                            );
                        })}
                    </li>

                </ul>
            </div >
        )
    };

}
export default App;
