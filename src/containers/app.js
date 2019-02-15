import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            storyList: [],
            storyObjects: [],
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
        const newStoryObjectList = []
        this.state.storyList.slice(0, 10).map(
            (id, n) => {
                fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
                    .then(response => {
                        response.json();
                        // I can see the returned promise when I console log the response here. Why is it undefined in the next step?
                    })
                    .then(data => {
                        newStoryObjectList[n] = data;
                        console.log('Data goes here', id, data)
                    })
                    ;
            })

        return (
            <div >
                <ul>
                    {/* {storyObjects} */}
                </ul>
            </div >
        )
    };

}
export default App;