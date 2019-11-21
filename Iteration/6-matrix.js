'use strict';

const max = matrix => {
  // Use nested for loop to find max value in 2d matrix
  // For example max([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
  // should return 9

  const reducer = (a, b) => (a > b ? a : b);

  return matrix
    .map(row => row.reduce(reducer))
    .reduce(reducer);
};


console.log(max([[1, 2, 3], [4, 5, 6], [7, 8, ], [1, 2, 3]]));
module.exports = { max };
