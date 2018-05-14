const create = (styles) => styles;

const resolve = () => {
  // noop;
};

const flatten = (input) => {
  if (!Array.isArray(input)) {
    input = [input];
  }

  const result = input.reduce((acc, style) => {
    if (style) {
      Object.keys(style).forEach(key => {
        if (style[key]) {
          acc[key] = style[key];
        }
      });
    }

    return acc;
  }, {});

  return result;
};

const absoluteFillObject = {
  position: 'absolute',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
};

const hairlineWidth = 1;

export {
  hairlineWidth,
  create,
  resolve,
  flatten,
  absoluteFillObject,
};