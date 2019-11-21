'use strict';

const sum = (...args) => {
  let result = 0;
  do {
    result += args.pop();
  } while (args.length > 0);
  return result;
};

module.exports = { sum };
