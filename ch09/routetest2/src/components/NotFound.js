import React, { Component } from 'react';

class NotFound extends Component {
    render() {
        return (
            <div>
                <h3>요청된 경로가 존재하지 않습니다</h3>
                <p>{this.props.location.pathname}</p>
            </div>
        );
    }
}

export default NotFound;