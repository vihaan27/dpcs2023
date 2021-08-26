# Unit 01: First Program
## Lesson 01: The elements of programming

*Example: Heron's Method*

Programming is essentially the combination of: 
1. **Algorithms:** Step-by-step procedure to solve a problem.
2. **Heuristics:**Step-by-step procedure to estimate the solution to a problem.
3. **Data structures:** The ways we structure data.

Additionally, we need a **programming language.** A way of communicating what we want the computer to do, in a sensible way.

**JavaScript**: A **high-level** language. 

Higher level: Closer to human understanding.
Lower level: Closer to machine understanding.

**Semantics** and **Syntax**.

**Example:** Heron's Method
*Heron's method is a heuristic for finding the square root of a number.*

Goal: Find the ssquare root of some number `N` within some tolerance, `t`.
1. Guess the square root of `N`: `g`. {g>0}
2. Test if `g^2` is within `t` of `N`. (`|g^2-N|<t`)
-- If **yes**, return `g`. (g is the answer)
-- If **no**: modify your guess as:
    The average of `g` and `N/g`. (`(g + N / g) /2)
    Repeat the test. 

*Example*: Find the square root of `30` within `0.01`.
1. Guess `30/2=15`
2. Is `15*15` within `0.01` of `30`? NO
3. New guess: `(15+30/15) / 2= 8.5`
4. Is `8.5*8.5` within `0.01` of `30`? NO
5. New Guess: `(8.8+30/8.5) / 2= ???`....



