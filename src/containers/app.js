import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);


        this.state = {
            userList: [],
        };
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {
                this.setState({ userList: users });
            });

    }

    render() {
        return (
            <div className="App">
                {this.state.userList.map(user =>
                    <div>
                        <span>{user.name}</span><br />
                        <span>{user.email}</span><br /><br />
                    </div>
                )}

            </div>
        )
    }
}


export default App;