import React, { Component } from 'react';

const list = [
    {
        title: 'React',
        author: 'Jordan Walke',
    }
]

class App extends Component {
    constructor(props) {
        super(props);


        this.state = {
            list: list,
        };
    }


    render() {
        return (
            <div className="App">
                {this.state.list.map(item =>
                    <div>
                        <span>{item.title}</span>
                    </div>
                )}

            </div>
        )
    }
}


export default App;