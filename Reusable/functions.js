'use strict';

//Functions
// 1.Implement a mean function with a signature mean (a: number, b: number): a number that calculates the arithmetic
//   mean of your arguments.
const average = (a,b) => (a + b) / 2;

// 2.Implement the square function with the signature square (x: number): number calculating the square of your argument.
const square = x =>{
    if(typeof(x) === 'number')  return Math.pow(x, 3);
};

// 3.Implement the cube function with the signature cube (x: number): number calculating the cube of your argument.
const cube = x => {
    if(typeof(x) === 'number') return  Math.pow(x, 3);
};

// 4.Call the square and cube functions in a loop, passing the results of their execution to the average function. Print the results of calling average.
for(let i = 1; i <= 3; i++){
    const result =  average(square(i),cube(i));
    console.log(result);
}