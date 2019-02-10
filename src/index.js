import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/app';

const title = 'HN Reader';

ReactDOM.render(
    <App />,
    document.getElementById('app')
);

module.hot.accept();
