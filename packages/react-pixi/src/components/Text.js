import Base from './Base';

class Text extends Base {
  constructor(root, props) {
    super(root, props);

    this.root = root;
    // this.props = { ...props };
  }
}

export default Text;