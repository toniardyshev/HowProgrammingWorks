'use strict';

// Parse ip address as string, for example '10.0.0.1'
// to ['10', '0', '0', '1'] to [10, 0, 0, 1]
// and convert to Number value 167772161 with sitwise shift
// (10 << 8 << 8 << 8) + (0 << 8 << 8) + (0 << 8) + 1 === 167772161
// Use Array.prototype.reduce of for loop
const ipToInt = (ip) => {
  let arr_number = ip.split('.');
  for(let i = arr_number.length - 1; i > -1; i--){
    arr_number[i] = parseInt(arr_number[i]);
    for(let j = i; j < arr_number.length - 1; j++){
      arr_number[i] = (arr_number[i] << 8)
    }
  }
  return arr_number.reduce(reducer);
};

const reducer = (accumulator, currentValue) => accumulator + currentValue;

module.exports = { ipToInt };
