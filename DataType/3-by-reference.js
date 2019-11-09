'use strict';

const inc = num => {
  if (typeof num === 'object' && typeof num.n === 'number') ++num.n;
};

module.exports = { inc };
