import Base from './Base';

import { Container } from 'pixi.js';

class View extends Base {
  constructor(props, root) {
    super(props, root);

    this.container = new Container();
  }

  render() {
    console.log('render', this.container, this.layout);
  }

  appendChild(child) {
    super.appendChild(child);

    this.container.addChild(child.container);
  }
}

Base.defaultProps = {
  style: {},
}

export default View;