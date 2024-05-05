/*
    Task 1
    - Create a function that would swap the value of x and y using only x and y as variables.
    - x and y must be numeric.
    - return -1 if x and y is not numeric.
    - print the swapped values in the console if both x and y are numeric.
    
    Task 2
    - invoke the function "swap" using the following scenarios:
    - "Apple", 10
    - 9, 17
*/

function swap(x, y){
    // Task 1: Add code here
    if ((typeof x === "number") & (typeof y === "number")){
        x = x + "," + y;
        x = x.split(",")
        y = Number(x[0]);
        x = Number(x[1]);
        console.log("x: " + x);
        console.log("y: " + y);
        
    } else {
        console.log(-1);
        //Or return -1 and assign it to another variable as the function swap is called 
    }
}

// Task 2: Add code here
let x = 9;
let y = 17;
swap(x,y);

x = "Apple";
y = 10;
swap(x,y);

module.exports = swap;