import Base from './Base';

import { Container } from 'pixi.js';

class View extends Base {
  constructor(props, root) {
    super(props, root);

    this.container = new Container();
  }

  appendChild(child) {
    super.appendChild(child);

    this.container.addChild(child.container);
  }

  removeChild(child) {
    super.removeChild(child);

    this.container.removeChild(child.container);
  }
}

Base.defaultProps = {
  style: {},
}

export default View;