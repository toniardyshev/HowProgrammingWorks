'use strict';

const sum = (...args) => {
  let result = 0;
  for (const index of args) {
    result += index;
  }
  return result;
};

module.exports = { sum };
