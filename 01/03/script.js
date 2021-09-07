// Unit 01: First Programs
// Lesson 3: Data structures

//Data structure:
// A way of storing data along with operations to control that data.


// Counter
// A data structure that stores a running count of something.
// incrememnt (n): Increase the value of the counter by n (default: 1)
// decrement (n): Decrease the value of the counter by n (default: 1)

// Encapsulation: Grouping data and the methods that manipulate the data together.


// let data=0; //initial counter value

// function increment(n) {
//     if (n==undefined) {
//         n=1;
//     }
//     //data=data+n;
//     data += n;
// }

// function decrement(n) {
//     //data = data - n;
//     data -= n;
//     if (data<0) {
//         data=0;
//     }

// }

// console.log(data);
// increment(2);
// console.log(data);
// decrement(3);
// console.log(data);

const counter={
    data: 0,
    getCount: function() {
        return this.data;
    },
    decrement: function (n) {
        if (n===undefined) {
                n=1;
                }
                //data=data+n;
        // special keyword: this (refers to the 'owner' of the programming code)
        this.data -= n;

        if (this.data<0) {
            this.data=0;
            }
    },
    increment: function (n) {
        if (n===undefined) {
            n=1;
            }
            //data=data+n;
            this.data += n;

        }
    }

// Stack Data Structure:
// A LIFO (Last-In-First-Out) data structure that holds a digital
// representation of a "stack of items."  

// Example:
//  The UNDO feature of any program.

// Functions: 
//      push(element): Add an element to the top of the stack.
//      pop(): Remove and return the element at the top of the stack.

// let data = [];
// let t=0;
// function push(element) {
//     data[t] = element; //<-- Add element to the top of the stack.
//     t++; // t +=1 OR t = t+1


// }

// function pop() {
//     let element= data[t-1];
//     t--;
//     return element;
// }

// console.log(data);
// push(4);

const stack= {
    data: [],
    top=0,
    push: function(element) {
        this.data[this.top]= element;
        this.top++;
    },
    pop: function() {
        let element= this.data[this.top-1];

        this.top--;
        if (this.top<0) {
            this.top=0;
            return undefined;
        }
        return element;
    }
}



