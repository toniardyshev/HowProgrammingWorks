'use strict';

//Identifiers
// 1.Declare a variable and write your name in it as a string literal
let person = 'Anton Ardyshev';

// 2.Declare a constant and write in it the year of your birth as a literal of a number.
const BIRTH_YEAR = 1990;

// 3.Create a function that prints a greeting and has one argument
const greeting = name => console.log(`Hello, ${name}`);

// 4.Call this function and pass the name to it as a string literal.
greeting('Anton Ardyshev');

// 5.Call the function by passing a variable to it.
greeting(person);

// 6.Call a function with a constant as an argument.
greeting(BIRTH_YEAR);