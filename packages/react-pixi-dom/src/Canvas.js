import React, { Component } from 'react';

import { Renderer, Root, createElement } from 'react-pixi';
import { Application } from 'pixi.js'

class Container extends Component {
  componentDidMount() {
    this.app = new Application({
      view: this.canvas,
      backgroundColor: 0xFF0000,
      width: this.props.width,
      height: this.props.height,
    });

    this.mountNode = Renderer.createContainer(this.app);

    Renderer.updateContainer(
      React.createElement(Root, { style: { width: this.props.width, height: this.props.height } }, this.props.children),
      this.mountNode,
      this,
    )
  }

  componentDidUpdate() {
    Renderer.updateContainer(
      React.createElement(Root, { width: this.props.width, height: this.props.height }, this.props.children),
      this.mountNode,
      this,
    )
  }

  render() {
    return React.createElement('canvas', { ref: (container) => { this.canvas = container; } });
  }
}

Container.container = createElement('ROOT');
Container.displayName = 'Canvas';

export default Container;