let name= "Vihaan";
let num= 4;
let realNum= 4.73;
let uninit; // undefined

const PI= 3.14159;

//output.innertext = 8 % 5 ;

//if (num % 2 == 0) {
//    output.innerText= "EVEN";
//}
//else {
//    output.innerText = "ODD.";
//}

// Example: I want to calculate the average height of everyone at OIS.
// let height1= 100;
// let height2= 117;
// let height3= 111;
// let height4= 96;
// let height5= 57;
// let height6= 78;

// output.innerText= (height1+height2+height3+height4+height5+height6)/6;

// Declaration syntax:
let heights= [100, 117, 111, 96, 57, 78];
output.innerText = heights; 

// Syntax for finding a specific value:
output.innerText= heights[3];
// Note: In javascript: array index values start at 0. Therefore, in this example, the third term/index is 96.

output.innerText = (heights[0]+heights[1]+heights[2]+heights[3]+heights[4]+heights[5]+heights[6])/heights.length;
