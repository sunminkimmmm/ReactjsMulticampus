import React, { Component } from 'react';

class App extends Component {
    constructor() {
        super()
        this.state = { x:0, y:0 };
      }

      //제어 컴포넌트
      //UI에서는 event통해 상태 변경
      change = (e) => {
          //e를 통해 엘리먼트 알아내고
          let newValue = parseInt(e.target.value);
          if(isNaN(newValue)) newValue=0;

          //id를 통해 한번더 구분
          if(e.target.id == "x")
              this.setState({x:newValue});
          else
              this.setState({y:newValue});

      }
    
    render() {
        return (
            <div>
            x: <input id="x" type="text" value={this.state.x} onChange={this.change}/><br/>
            y: <input id="y" type="text" value={this.state.y} onChange={this.change}/><br/>
            결과: <span>{this.state.x + this.state.y}</span>
                
            </div>
        );
    }
}

export default App;
