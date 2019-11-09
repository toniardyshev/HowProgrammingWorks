'use strict';

//Loops
// 1.Print all odd numbers from the range [15, 30] including the extreme numbers.
for(let i = 15; i <= 30; i++){
    if(i % 2) { console.log(i); }
}

// 2.Implement the range function (start: number, end: number) that performs the previous task.
const range_for = (start, end) => {
    for(start; start <= end ; start++){
        if(start % 2) { console.log(start) }
    }
};
range_for(15,30);

const range_while = (start, end) => {
    while(start <= end){
        if(start % 2) { console.log(start); }
        start++;
    }
};
range_while(15,30);
