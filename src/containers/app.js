import React, { Component } from 'react';


class App extends Component {
    constructor(props) {
        super(props);

        const storyId = 19143064

        this.state = {
            id: [],
            title: []
        };
    }
    componentDidMount() {
        // fetch('https://hacker-news.firebaseio.com/v0/jobstories.json?print=pretty')
        //     .then(response => response.json())
        //     .then(stories => {
        //         this.setState({ storyList: stories });
        //     });
        const storyId = 19143064

        fetch(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json?print=pretty`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    id: storyId,
                    title: data.title,
                });
            })

    }

    render() {
        const { id, title } = this.state;
        return (
            <div className="App">
                <span>{id}</span><br />
                <span>{title}</span><br />
            </div>
        )
    }
}


export default App;