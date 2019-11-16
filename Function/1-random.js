'use strict';

const random = (min = 0, max) => {
  // Generate random Number between from min to max
  // Use Math.random() and Math.floor()
  // See documentation at MDN
  if(max !== 'number') return;
  return Math.floor(Math.random() * Math.floor(max - min + 1)) + min;
};

module.exports = { random };
