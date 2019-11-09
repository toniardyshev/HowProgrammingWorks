'use strict';

// 1.Define array of objects with two fields: name and phone (phone book).
// Example: { name: 'Marcus Aurelius', phone: '+380445554433' }.
let phone_book = [
    { name: 'Anton', phone: '+7963***7*22' },
    { name: 'Alina', phone: '+7981***3*65' },
];

//2.Implement function findPhoneByName with signature findPhoneByName(name: string): string.
// Returning phone from that object where field name equals argument name. Use for loop for this search.
const findPhoneByName = (name) => {
    for (const obj of phone_book) {
        if(obj.name === name ) return obj.phone;
    }
};
console.log(findPhoneByName('Anton'));