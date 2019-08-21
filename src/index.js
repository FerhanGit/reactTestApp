import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const data = {
    counters : [
        {
            id: 1,
            clickCount: 0
        },
        {
            id: 2,
            clickCount: 3
        },
        {
            id: 3,
            clickCount: 6
        }
    ]
}

ReactDOM.render(<App data={data}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
