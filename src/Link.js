import React from 'react';

import { navigate, resolve } from './routerService.js';

class Link extends React.PureComponent {
  onClick = (event) => {
    event.preventDefault();
    navigate(this.props.to, this.props);
  }

  render() {
    return (
      <a href={resolve(this.props.to, this.props)} onClick={this.onClick}>{this.props.children}</a>
    );
  }
}

export default Link;
