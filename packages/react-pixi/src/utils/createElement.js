import { Root, Text, View } from '../components';

let ROOT_NODE = undefined;

const COMPONENTS = {
  ROOT: (parent, props) => new Root(parent, props),
  TEXT: (parent, props) => new Text(parent, props),
  VIEW: (parent, props) => new View(parent, props),   
  default: () => undefined, 
}

function getHostContextNode(rootNode) {
  return ROOT_NODE;
}

function createElement(type = 'default', props, parent) {
  return COMPONENTS[type](parent, props);
}

export { createElement, getHostContextNode };