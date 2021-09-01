# Unit 01: First programs
## Lesson 02: Storing data

*Example: Evaluating general polynomial functions*

**Data**: Any information I will want to use as a part of my program.

### Variables
A **variable** a *box* to hold data in.

let name= "Vihaan";

The name is a *reference* to a location in memory.

Variables have a **data type**.

In javascript:
- Numbers
- Strings (words, characters, symbols)
- Functions
- Boolean (True/false)

Variables need a name, **identifier**.

Rules for identifiers:
- Any character, including numbers, $, _(but shouldn't start with a number).
- Can't be any "reserved" keywords. (let, function, etc.)

Best practices for identifiers:
- Lowercase variables
- - - camelCase
- - - underscore_delineated
- Uppercase constants
- - - PI
- Stick to the latin characters.
- Use meaningful names:
' let height =110 ' is better than 
' let x=110 '


### Operators:

**Math Operators**: 
- Addition: +
- Subtraction: -
- Division: /
- Multiplication: *
- Modulus: %
    (Remainder after division.)

**String Operators**:
- Concatenate: +

**Assignment operators**:
- Assignment: = (stores a value in the variable)
- Operator assignment: (operator)=
    Example: +=, -=, *=, /=, %=.

**Boolean operators**:
*Operators on True/False values.*
- Negation: ! '!(true)'
- AND: && (return true if both boolean values are true)
- OR: || (return true if at least one boolean value is true)

**Comparison operators**
*Operators that return true/false valeus.*
- Equality: '=='
- Not equal: '!='
- Greater than: '>'
- Less than: '<'
- Greater than or equal to: '>='
- Less than or equal to: '<='


### Constants
Named references to a location in memory whose value cannot change.

In javascript:
'const PI= 3.14'

### arrays
A simple data structure for storing closely related data.

Pros:
- Use the same named reference for all data points.
- Reference individual data points using a numerical index.
- Don't need a preset number of values.