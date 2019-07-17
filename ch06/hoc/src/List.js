import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem';
import Logger from './Logger';

class List extends Component {
    // shouldComponentUpdate(nextProps, nextState) {
    //     return this.props.todolist !== nextProps.todolist;
    // }
    
    render() {
        let items = this.props.itemlist.map((item) => {
            return (<ListItem key={item.no} isLog={true} itemObject={item} />)
        });
    
        return (
            <ul className="list-group">
                {items}
            </ul>
        )
    }
    
}

List.propTypes = {
    itemlist : PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Logger(List);