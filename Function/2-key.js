'use strict';

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
console.log(characters.length);
const generateKey = (length, possible) => {
  if(possible.length =0) return;
  let str = '';
  for(let i = 0; i < length; i ++){
    let random =  Math.floor(Math.random() * Math.floor(possible.length));
    str += possible[random];
  }
  return str
};

module.exports = { generateKey };
