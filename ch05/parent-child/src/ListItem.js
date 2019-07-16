import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ListItem extends Component {
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

export default ListItem;