import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Calc extends Component {
    render() {
        let result = 0;
        switch(this.props.oper) {
            case "+" :
                result = parseFloat(this.props.x) + parseFloat(this.props.y);
                break;
            case "*" : 
                result = parseFloat(this.props.x) * parseFloat(this.props.y);
                break;
            default :
                result = 0;
        }

        return (
            <div>
                <h3>연산 방식 : { this.props.oper }</h3>
                <hr />
                <div>
                    {this.props.x} {this.props.oper} {this.props.y}
                        = {result}
                 </div>
            </div>
        );
    }
}


//클래스 내부를 보지 않아도 되므로 여기에 정의
//에러 일으키기 가능
//타입 지정
Calc.propTypes = {
    x : PropTypes.number,
    y : PropTypes.number,
    oper : PropTypes.oneOf(['+','-','*','/'])
}

Calc.defaultProps = {
    x : 0,
    y : 0,
    oper : "+"
};


export default Calc;