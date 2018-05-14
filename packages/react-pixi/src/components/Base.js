import yoga, { Node } from 'yoga-layout';

const LAYOUT_SETTERS = [
  'width',
  'height',
  'minWidth',
  'maxWidth',
  'minHeight',
  'maxHeight',
  'justifyContent',
  'alignItems',
  'alignSelf',
  'alignContent',
  'flexGrow',
  'flexShrink',
  'positionType',
  'aspectRatio',
  'flexWrap',
  'flexDirection',
];

const BOX_MODEL_SETTERS = [
  'position',
  'margin',
  'border',
  'padding',
];

class Base {
  constructor(root, props = {}) {
    this.root = root;
    this.props = props;

    this.children = [];

    // Init yoga layout node
    this.node = Node.createDefault();
    this.node.setDisplay(yoga.DISPLAY_FLEX);

    this.setDefaultProps();
    this.applyProps(this.props);

    console.log(this.node.getComputedLayout());
  }

  setDefaultProps() {
    for (let prop in this.constructor.defaultProps) {
      if (!(prop in this.props) || typeof this.props[prop] === 'undefined') {
        // children can exist, but be undefined
        this.props[prop] = this.constructor.defaultProps[prop];
      }
    }
  }

  applyProps(props) {
    Object.keys(props.style).map(attribute => {
      this.applyStyle(attribute, props.style[attribute]);
    })
  }

  applyStyle(key, value) {
    if (LAYOUT_SETTERS.indexOf(key) !== -1) {
      this.node[`set${key[0].toUpperCase()}${key.substr(1)}`](value);
    } else if (BOX_MODEL_SETTERS.indexOf(key) !== -1) {
      console.warn(`TODO ${key} should be implemented`);
    } else {
      console.warn(`TODO ${key} ${value} should be implemented in webgl`);
    }
  }

  appendChild(child) {
    child.parent = this;
    // add a child to the list to be rendered
    this.children.push(child);
  }

  removeChild(child) {
    const index = this.children.indexOf(child);
    child.parent = null;

    this.children.splice(index, 1);
  }

  update(oldProps, newProps) {
    // update all things, split into props, events, and children
    for (let prop in newProps) {
      // normal props
      if (oldProps[prop] !== newProps[prop]) {
        console.log('LALALA');
      }
    }
  }

  calcLayout() {

  }

  render() {
    console.log(this.name, this.children);

    this.children.forEach(child => child.render());
  }
}

export default Base;