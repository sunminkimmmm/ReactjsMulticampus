import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class MyButton extends PureComponent {
    // shouldComponentUpdate(nextProps, nextState) {
    //     return false
    // }
    
    render() {
        console.log("### My button 렌더")
        return (
            <button className="btn btn-default" onClick={ ()=> this.props.addItem()}>
            Add Item!</button>
        );
    }
}

MyButton.propTypes = {
    addItem: PropTypes.func.isRequired
};

export default MyButton;