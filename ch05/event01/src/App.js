import React, { Component } from 'react';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num:0
        }
    }
    add() {
        //이렇게 쓰면  console에 찍히는 값 같음
        this.setState({ num : this.state.num+1 },()=>{
            console.log(this.state.num);
        });
        //setState는 비동기적으로 처리
        //console에 찍히는 값이 다름
        
      }
    
    subtract = ()=> {
        this.setState({ num : this.state.num-1 });
        console.log(this.state.num);
        //this.state.num-- --> 하위 컴포넌트에 상태 변화를 알리지 않는다
        //자식 컴포넌트에게 리렌더링 되지 않는다. --> 될려면 반드시 setState사용
      }
    render() {
        return (
         <div className="well">
            <span className="input-group-btn">
              <button type="button" className="btn btn-primary" 
                onClick={ this.subtract}>
                <span className="glyphicon glyphicon-minus"></span>
              </button>
              <button type="button" className="btn btn-primary" 
                onClick={this.add.bind(this)}>
                <span className="glyphicon glyphicon-plus"></span>
              </button>
              <input type="text" className="form-control input-number" value={this.state.num} />
            </span>
        </div>
        );
    }
}

export default App;