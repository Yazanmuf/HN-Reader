import React, { Component } from 'react';



class App extends Component {
    constructor(props) {
        super(props);

        // const storyId = 19143064

        this.state = {
            // id: [],
            // title: [],
            storyList: [],
        };
    }

    componentDidMount() {
        fetch('https://hacker-news.firebaseio.com/v0/jobstories.json?print=pretty')
            .then(response => response.json())
            .then(stories => {
                this.setState({ storyList: stories });
            });
        // const storyId = 19143064;


        // fetch(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json?print=pretty`)
        //     .then(response => response.json())
        //     .then(data => {
        //         this.setState({
        //             id: storyId,
        //             title: data.title,
        //         });
        //     })

    }

    render() {
        const { storyList } = this.state;
        // console.log(storyList)
        return (
            <div>
                <ul>
                    {
                        storyList.map(
                            (id) => {
                                fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
                                    .then(response => {
                                        console.log(response)
                                        response.json()
                                    })
                                    .then(data => {
                                        console.log('Why is this step undefined?=====>', data)
                                        return (
                                            <li>{data}</li>
                                        );
                                    });
                            })

                    }
                </ul>
            </div>
        )
    };

}
export default App;