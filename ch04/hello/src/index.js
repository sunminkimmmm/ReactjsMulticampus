import React from 'react';
import ReactDOM from 'react-dom';
//app전체에 적용할 공용스타일을 앞에 배치
import 'bootstrap/dist/css/bootstrap.css'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
