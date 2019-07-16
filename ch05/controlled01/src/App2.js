import React, { Component } from 'react';
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants';

class App2 extends Component {
    constructor(props) {
        super(props);
        this.state = { x:0, y:0, result:0 };
        
    }
    add = () => {
        let x = parseInt(this.refs.tx.value);
        let y = parseInt(this.refs.ty.value);
        if(isNaN(x)) x=0;
        if(isNaN(y)) y=0;
        this.setState({x:x, y:y, result:x+y})


    }
    
    render() {
        return (
            <div className="container">
                x: <input ref="tx" type="text" id="x" defaultValue={this.state.x}/><br/>
                y: <input ref="ty" type="text" id="y" defaultValue={this.state.y}/><br/>
                <button onClick={this.add}>add</button><br/>
                result: <span>{this.state.result}</span>
            </div>
        );
    }
}

export default App2;
