'use strict';

// Parse ip address as string, for example '10.0.0.1'
// to ['10', '0', '0', '1'] to [10, 0, 0, 1]
// and convert to Number value 167772161 with sitwise shift
// (10 << 8 << 8 << 8) + (0 << 8 << 8) + (0 << 8) + 1 === 167772161
// Use Array.prototype.reduce of for loop
const ipToInt = ip => {
  const arrNumber = ip.split('.');
  for (let i = 0; i < arrNumber.length; i++) {
    arrNumber[i] = parseInt(arrNumber[i]);
    if (i === arrNumber.length - 1) continue;
    for (let j = i; j < arrNumber.length - 1; j++) {
      arrNumber[i] <<= 8;
    }
  }
  const reducer = (acc, val) => acc + val;
  return arrNumber.reduce(reducer);
};

module.exports = { ipToInt };
