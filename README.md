# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React's `useEffect` hook: an infinite loop caused by incorrect dependency management.  The `useEffect` hook runs continuously because its dependency, the `count` state, changes with every execution.

## Bug Description
The `MyComponent` function uses the `useState` and `useEffect` hooks. The `useEffect` hook attempts to increment the `count` state, but because `count` is listed as a dependency, this creates an infinite loop.  The component continuously updates its state, triggering the `useEffect` over and over.