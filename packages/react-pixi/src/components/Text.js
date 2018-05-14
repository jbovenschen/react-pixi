import Base from './Base';

class Text extends Base {
  constructor(root, props) {
    super(root, props);
  }
}

Text.defaultProps = {
  style: {},
}

export default Text;