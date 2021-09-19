# Day 28: Sorting, Algorithm Analysis

**You should be able to:**
- Articulate the difference between an algorithm and a heuristic
- Explain Big O in terms of both time and space (when/how is it useful, what does it measure, etc.)
- Describe how both Bubble Sort and Merge Sort operate, as well as discuss their time/space complexities


## In your own words, what is Big O measuring?

- It classifies algorithms according to how their run time or space requirements grow as the input size grows in the worst case scenario.


## Which Big O represents the fastest growth curve (i.e. the slowest runtime)?

- O(n)
- O(n<sup>2</sup>)
- O(n * log(n))
- **O(n!)** ☑️


## Which Big O represents the slowest growth curve (i.e. the fastest runtime)?

- O(log(n))
- O(n)
- O(n<sup>2</sup>)
- **O(1)** ☑️

**Reference:**
- [Resource: Big O Cheat Sheet](https://www.bigocheatsheet.com/)


## Which is the faster sorting algorithm?

- Bubble sort
- **Merge sort** ☑️


## What is the best Big O of a sorting algorithm?

- O(n * log(n))


## Describe the conceptual approach behind merge sort.

### Top Down Approach (Recursive)
1. If array is one element, good job it’s sorted!
2. Otherwise, split the array and merge sort each half.
3. Merge combined halves into sorted whole.

### Bottom Up Approach (Iterative)
1. Divide array of n elements into n arrays of 1 element.
2. Merge neighboring arrays in sorted order.
3. Repeat step 2 until there’s only one array.
