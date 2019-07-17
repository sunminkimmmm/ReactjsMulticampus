import React, { Component } from 'react';
import axios from 'axios';
import InputName from './InputName';
import ContactList from './ContactList';
import Loading from './Loading';
import { Portal } from 'react-portal';

//개발,배포 모드 분리 
let BASEURL;
if(process.env.NODE_ENV==="development"){
    BASEURL = "/api"//proxy설정
}else{
    BASEURL = "/api2";//proxy설정
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { name: "", contacts: [], isLoading:false }
    }

    changeName = (name) => {
        this.setState({name:name});
    }
     
    searchContact = () => {
        let name = this.state.name;
        if(name.length >=2 ){
            this.setState({isLoading: true});
            axios.get(BASEURL+ "/contacts_long/search/"+name)
            .then((response) => {
                this.setState({isLoading:false});
                this.setState({contacts:response.data});
            })
            .catch((error)=>{
                this.setState({isLoading:false});
                console.log("###에러발생",error);
            });

        }else{
            this.setState({contacts:[]});
        }
    }


    render() {
        return (
            <div className="container">
            <div className="well">
                <div className="col-xs-1"></div>
                <div className="title col-xs-10">:: 연락처 앱</div>
                <div className="col-xs-1"></div>
                <div className="clearfix"></div>
            </div>
            <div className="panel panel-default panel-borderless">
                <div className="panel-body">
                    <InputName searchContact={this.searchContact} name={this.state.name}
                        changeName={this.changeName}/>
                </div>
            </div>
            <ContactList contacts={this.state.contacts} 
 />
            <Portal node={document && document.getElementById('modal-area')}>
                <Loading isLoading={this.state.isLoading}>
                    <div className="well title">
                        <h4>데이터 조회중</h4>
                    </div>
                </Loading>    
            </Portal>
        </div>
        );
    }
}

export default App;