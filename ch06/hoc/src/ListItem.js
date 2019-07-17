import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Logger from './Logger';

class ListItem extends Component {
    // shouldComponentUpdate(nextProps, nextState) {
    //     return this.props.no !== nextProps.no || this.props.item !== nextProps.item;
    // }
    
    render() {
        let obj = this.props.itemObject;
        return (
            <li className="list-group-item list-group-item-sucess">
               {obj.no}: {obj.item}
            </li>
        );
    }
}

ListItem.propTypes = {
    itemObject:PropTypes.object.isRequired
};

export default Logger(ListItem);