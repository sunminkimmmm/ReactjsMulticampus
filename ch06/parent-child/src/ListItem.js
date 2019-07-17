import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class ListItem extends PureComponent {
    // shouldComponentUpdate(nextProps, nextState) {
    //     return this.props.no !== nextProps.no || this.props.item !== nextProps.item;
    // }
    
    render() {
        console.log("### ListItem 렌더")
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