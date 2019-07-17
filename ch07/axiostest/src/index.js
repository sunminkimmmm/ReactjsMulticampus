import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios'

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// axios.get("/api/contacts",{
//     params : { pageno:1, pagesize:3 }  //1page 3개만 전달
// })
// .then((response)=>{
//     console.log(response);
// })

axios.post("/api/contacts",{
    name: "ksm",
    tel: "010-1234-5678",
    address:"서울시"
})
.then((response)=>{
    if(response.data.status === "success"){
        return axios.get("/api/contacts/" + response.data.no);

    }else{
        throw new Error(response.data.message);
    }

})
.then((response)=>{
    console.log(response.data)
})
.catch((error)=>{
    console.log("에러 발생" + error)
})