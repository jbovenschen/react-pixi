import Base from './Base';

class Root extends Base {
  constructor(root, props) {
    super(root, props);
  }

  appendChild(child) {
    super.appendChild(child);

    this.root.stage.addChild(child.container);
  }

  removeChild(child) {
    super.removeChild(child);

    this.root.stage.removeChild(child.container);
  }

  render() {
    this.children.forEach(child => child.render());
  }
}

Root.defaultProps = {
  style: {},
}

export default Root;