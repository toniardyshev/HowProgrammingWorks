'use strict';

const ages = persons => {
  const peoples = {};
  for (const person in persons) {
    peoples[person] = persons[person].died - persons[person].born;
  }
  return peoples;
};

module.exports = { ages };
