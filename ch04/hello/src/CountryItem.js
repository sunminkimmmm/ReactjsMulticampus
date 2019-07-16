import React, { Component } from 'react';
import styles from './styles';

class CountryItem extends Component {
    render() {
        let item = this.props;
        return (
            <div>
                <li key={item.no} style={styles.listItemStyle}
                 className={item.visited ? 'list-group-item active' : 'list-group-item'}>
                 {item.country}
                </li>
            </div>
        );
    }
}

export default CountryItem;