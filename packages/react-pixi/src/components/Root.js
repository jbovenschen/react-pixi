import Base from './Base';

class Root extends Base {
  constructor(root, props) {
    super(root, props);
  }

  appendChild(child) {
    super.appendChild(child);

    this.root.stage.addChild(child.container);
  }
}

Root.defaultProps = {
  style: {},
}

export default Root;