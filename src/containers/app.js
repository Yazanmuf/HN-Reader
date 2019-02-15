import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            storyList: [],
            // storyObjects: [],
        };
    }

    componentDidMount() {
        const { storyList } = this.state;
        fetch('https://hacker-news.firebaseio.com/v0/jobstories.json?print=pretty')
            .then(response => response.json())
            .then(stories => {
                this.setState({ storyList: stories });
            });
        console.log('componentDidMount phase complete', storyList)



    }

    render() {
        let newStoryObjectList = []
        this.state.storyList.slice(0, 10).map(
            (id, n) => {
                fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
                    .then(response => response.json())
                    .then(data => newStoryObjectList.push(data));
            })
        console.log(newStoryObjectList)

        return (
            <div >
                <ul>
                    {newStoryObjectList.map((story) =>
                        <li key={story.id}>
                            {post.title}
                        </li>
                    )}
                </ul>
            </div >
        )
    };

}
export default App;