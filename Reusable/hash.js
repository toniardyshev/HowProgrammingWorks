'use strict';

//Hash
// 1.Define hash with key contains name (from previous example) and value contains phone.
let phone_book = {
   anton:  { name: 'Anton', phone: '+7963***7*22' },
   alina: { name: 'Alina', phone: '+7981***3*65' },
};

// 2.Implement function findPhoneByName with signature findPhoneByName(name: string): string.
// Returning phone from hash/object. Use hash[key] to find needed phone.

const findPhoneByName = (name) => {
    for (const key in phone_book) {
        const person = phone_book[key];
        if(key === name ) return person.phone;
    }
};
console.log(findPhoneByName('alina'));