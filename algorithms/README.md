# Fundamentals of algorithms and data structures

## What is an algorithm
An algorithm is a set of well-defined instructions to solve a particular problem

### Analogy "Following a recipe"
Ingredients -> Recipe       -> Tasty dish \
Inputs      -> Algorithm    -> Output

Example: 
two numbers a and b -> 1. add them together, 2. return the sum -> sum of a and b

### Characteristics
- Well defined inputs and outputs
- Each step should be clear and unambiguous
- Language independent

### Why algorithms
As a developer, you're going to come across problems that you need to solve

Learning algorithms translates to learning different techniques to efficiently solve those problems

One problem can be solved in many ways using different algorithms

Every algorithm comes with its own tradeoffs when it comes to performance

## Measuring of the performance
There are multiple ways to solve one problem

Ex: There are multiple algorithms to sort a list of number

How do we analyse which one of them is the most efficient algorithm?

It is NOT the absolute running time of the algorithm because it cannot be predicted, since it depends on a number of factors
- Programming language used
- Different computer hardware

We evaluate the performance of an algorithm in terms of its input size

## Time & Space complexity
Time complexity - Amount of time takes by an algorithm to run, as a function of input size
Space complexity - Amount of memory taken by an algorithm to run, as a function of input size

By evaluating against the input size, the analysis is not only machine independent but the comparison is also more appropriate.

There is no one solution that works best every single time. Same algorithm can not be suited for different input sizes. In some range it may perform the best, while outside of that range, another algorithm may be more fitting.

Web apps
If your app needs to be very quick and has plenty of memory to work with, you don't have to worry about space complexity.

Chips
If you have very little memory to work with, you should pick a solution that is relatively slower but needs less space (memory)

### Asymptotic notations
- used to represent complexity
- mathematical tools to represent time and space complexity
1. Big-O Notation (O-notation) - Worst case complexity - most commonly used
2. Omega Notation (Ω-notation) - Best case complexity
3. Theta Notation (Θ-notation) - Average case complexity

## Big O notation
The worst case complexity of an algorithm is represented using the Big-O notation
Big-O notation describes the complexity of an algorithm using algebraic terms
Two important characteristics:
- expressed in terms of the input
- focuses on the bigger picture without getting caught up in the minute details

Program = implemented algorithm by a language (JS)

How many times is something executed based on input size

[Big-O Time Complexity Calculation](./Big-O%20notation/sum.ts)


![Big-O Time Complexity Notation](./static/Big-O%20Notation.png)

### Look for in the Code
- Single line of code not dependent on input size - e.g. multiplication - Constant - O(1)
- Loop - Linear O(n) - Input size correlates with a a number of executions in the loop - for loops, recrusive functions that call a recursive function only once per recursion
- Loop inside a loop - Quadratic O(n^2)
- Loop inside a loop inside a loop - Cubic O(n^3)
- Logarithmic O(logn) - Input size reduces by half every iteration
- Exponential 0(2^n) - Recursive functions that double each time

### Time complexity
- Constant O(1)
- Logarithmic O(logn)
- Linear O(n) \
--- You should avoid those below when possible ---
- Quadratic O(n^2)
- Cubic O(n^3)
- Exponential O(2^n)
- Factorial O(n!)


### Space Complexity
- Constant O(1) - if the memory doesn't depend on the input size, e.g. sorting algorithms sorting within the same array (without utilizing additional arrays)
- Linear O(n) - memory increases as the input size increases
- Logarithmic O(logn) - memory increases as the input size increases but not at the same rate

Multiple algorithms exist for the same problem and there is not one right solution. Different algorithms work well under different constraints

### Objects in Big-O
Object - a collection of key-value pairs { name: "James", "age": 29 }
Insert, remove, access - O(1) - no matter how large the object is (how many key value pairs it has)
Search - O(n)

Methods:
- Object.keys() - O(n)
- Object.values() - O(n)
- Object.entries() - O(n)

### Arrays in Big-O
An array is an ordered collection of values - [1,2,3,4]
Insert/remove at end - O(1)
Insert/remove at beginning - O(n) - because all indexes has to be reset

Access - O(1)
Search - O(n)

Methods:
- push, pop - O(1)
- shift, unshift, concat, slice, splice - O(n)
- forEach, map, filter, reduce, find - O(n)

Note: If you use an iteration over an array inside the callback function of forEach, map, filter, reduce, find, it would make the time complexity quadratic - interviewers are not typically happy about this - use map, set instead to access necessary elements


## Algo categories 
- [Math](./1_Math_Algorithms/README.md)
- [Search](./2_Search_Algorithms/README.md)
- [Sort](./3_Sort_Algorithms/README.md)
- [Misc](./4_Misc_Algorithms/README.md)


## Algorithm design techniques
### Bruteforce
Simple and exhaustive technique that evaluates every possible outcome to find the best solution. E.g. Linear search

### Greedy
Choose the best option at the current time, without any consideration for the future. E.g. Dijkstra's algorithm, Prim's algorithm and Kruskal's algorithm (those three are applicable on graph datastructure)

### Divide and Conquer
Divide the problem into smaller sub=problems. Each sub-problem is then solved and the partial solutions are recombined to determine the overal solution. E.g. Binary Search, Quick Sort, Merge Sort, Tower of Hanoi

### Dynamic Progarmming
Similar to Divide and Conquer in a sense that you divide the problem into smaller problem.

Divide the problem into smaller sub problems. Break it down into smaller but overlapping sub problems. Store the result and reuse it for the same sub problems (basically a cache of previous results). This is called memoization and is an optimization technique that improves the time complexity of your algorithm. E.g. Fibonacci number and climbing staircase

### Backtracking
Similar to Bruteforce

You generate all possible solutions. Check if the solution satisfies all the given constraints and only then you proceed with generating subsequent solutions. If the constraints are not satisfied, backtrack and go on a different path to find the solution. E.g. N-Queens problem (where the queens have to be setup on the chess board in such way they do not threaten each other)

## Next Steps
Solve more problems and determine time complexities for each

Examples
Finding GCD (greatest common denominator) using Euclidian algorithm
Finding permutations and combinations of a list of numbers
Finding the longers common substring in a given string
Knapsack problem
