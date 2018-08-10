import React from 'react';

import { setRoutes, listen, current } from './routerService.js';

class Router extends React.PureComponent {
  constructor(props) {
    super(props);

    setRoutes(props.routes);
    this.state = {route: current()};
    listen((route) => this.setState({route}));
  }

  getRouteProp = () => ({
    name: this.state.route.name,
    path: this.state.route.path,
    params: this.state.route.params,
  })

  render() {
    return this.state.route ?
      <this.state.route.component route={this.getRouteProp()}/> :
      null;
  }
}

export default Router;
