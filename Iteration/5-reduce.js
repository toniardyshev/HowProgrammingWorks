'use strict';

const sum = (...args) => {
  const reducer = (acc, val) => acc + val;
  return args.reduce(reducer);
};

module.exports = { sum };
