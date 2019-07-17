import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem';

class List extends PureComponent {
    // shouldComponentUpdate(nextProps, nextState) {
    //     return this.props.todolist !== nextProps.todolist;
    // }
    
    render() {
        console.log("###List render")
        let items = this.props.itemlist.map((item) => {
            return (<ListItem key={item.no} itemObject={item} />)
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

export default List;