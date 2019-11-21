'use strict';

const random = (min = 0, max) => {
  if (max !== 'number') return;
  return Math.floor(Math.random() * Math.floor(max - min + 1)) + min;
};

module.exports = { random };
