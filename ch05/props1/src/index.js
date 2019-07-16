import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calc from './Calc';
import * as serviceWorker from './serviceWorker';

let values = {x:5, y:4, oper:"+"};
ReactDOM.render(<Calc {...values} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
