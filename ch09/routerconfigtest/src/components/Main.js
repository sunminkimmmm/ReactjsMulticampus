import { Component } from 'react';
import { renderRoutes } from 'react-router-config';
import { routes } from '../routes';

class Main extends Component {
    render() {
        return renderRoutes(routes, { title:"abc" });  //자식커포넌트에 추가적인 props도 전달가능
    }
}

export default Main;