'use strict';

const methods = iface => {
  let array = [];
  for(let key in iface) {
    array.push([key, iface[key]().length]);
  }
  return array;
};

module.exports = { methods };