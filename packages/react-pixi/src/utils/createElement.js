import { Root, Text, View } from '../components';

let ROOT_NODE = undefined;

const COMPONENTS = {
  ROOT: () => new Root(),
  TEXT: () => new Text(),
  VIEW: () => new View(),   
  default: () => undefined, 
}

function getHostContextNode(rootNode) {
  return ROOT_NODE;
}

function createElement(type = 'default', props) {
  console.log('createElement', COMPONENTS[type]());

  return COMPONENTS[type]();
}

export { createElement, getHostContextNode };