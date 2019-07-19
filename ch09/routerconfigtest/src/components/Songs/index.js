
import { Component } from 'react';
import { renderRoutes } from 'react-router-config'

class Songs extends Component {
    render() {
        const route = this.props.route;
        return renderRoutes(route.routes);
    }
}

export default Songs;
