import emptyObject from 'fbjs/lib/emptyObject';
import invariant from 'fbjs/lib/invariant';
import ReactReconciler from 'react-reconciler';
import { createElement, getHostContextNode } from './utils/createElement';
import { empty } from 'rxjs/observable/empty';

const PixiRenderer = ReactReconciler({
  appendInitialChild(parentInstance, child) {
    if (typeof child === 'string') {
      // Noop for string children of Text (eg <Text>{'foo'}{'bar'}</Text>)
      invariant(false, 'Text children should already be flattened.');
      return;
    }

    if (parentInstance.appendChild) {
      parentInstance.appendChild(child);
    }
  },

  createInstance(type, props, internalInstanceHandle) {
    return createElement(type, props, internalInstanceHandle);
  },

  createTextInstance(text, rootContainerInstance, internalInstanceHandle) {
    return text;
  },

  finalizeInitialChildren(wordElement, type, props) {
    return false;
  },

  getPublicInstance(inst) {
    return inst;
  },

  prepareForCommit() {
    // noop
  },

  prepareUpdate(wordElement, type, oldProps, newProps) {
    return true;
  },

  resetAfterCommit() {
    // noop
  },

  resetTextContent(text) {
    // noop
  },

  getRootHostContext(instance) {
    // return emptyObject;

    // const a = getHostContextNode(instance);
    // console.log('getRootHostContext', a);
    // return a;
    return emptyObject;
  },

  getChildHostContext(instance) {
    return emptyObject;
  },

  shouldSetTextContent(type, props) {
    return false;
  },

  now: () => {},

  isPrimaryRenderer: false,

  useSyncScheduling: true,

  mutation: {
    appendChild(parentInstance, child) {
      console.log('appendChild', parentInstance);

      if (parentInstance.appendChild) {
        parentInstance.appendChild(child);
      }

      if (typeof child.render === 'function')
        child.render(parentInstance.element); // we just added a new child, so we want to render it
    },

    appendChildToContainer(parentInstance, child) {
      // child.render();

      console.log('appendChildToContainer', parentInstance, child);


      child.render();
      // if (parentInstance.appendChild) {
      //   parentInstance.appendChild(child);
      // }
    },

    removeChild(parentInstance, child) {
      parentInstance.removeChild(child);
    },

    removeChildFromContainer(parentInstance, child) {
      console.log('removeChildFromContainer', parentInstance, child);

      // parentInstance.removeChild(child);
    },

    insertBefore(parentInstance, child, beforeChild) {
      // noob
    },

    commitUpdate(instance, updatePayload, type, oldProps, newProps) {
      console.log('commitUpdate', instance);

      // if (typeof instance.update !== 'undefined') {
      //   instance.update(oldProps, newProps);
      // }
      // if (typeof instance.newSize !== 'undefined') {
      //   // component resized
      //   instance.newSize();
      // }
    },

    commitMount(instance, updatePayload, type, oldProps, newProps) {
      // noop
    },

    commitTextUpdate(textInstance, oldText, newText) {
      textInstance = newText;
    },
  }
})

export default PixiRenderer;