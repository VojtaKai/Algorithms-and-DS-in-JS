# Sorting Algorithms
Sorting algorithms are used to arrange elements of an array in a specific order
- Bubble sort
- Insertion sort
- Quick sort
- Merge sort

Sort return the same array - in-place sorting

## Bubble sort
Poor alogirthm, used for introduction only

Idea 
- Compare adjacent elements in the array and swap the position if they are not in the intended order.
- Repeat the instructions as you step through each element in the array
- Once you step through the whole array with no swaps, the array is sorted

## Insertion sort

Idea
- Virtually split the array into a sorted and an unsorted part
- Assume that the first element is already sorted and remaining elements are unsorted
- Select an unsorted element and compare with all elements in the sorted part (starting from right to left)
- If the element in the sorted part is greater than the selected element, shift the element in the sorted part to the right by one. Else proceed to the next element in the unsorted part
- Insert the selected element at the right index
- Repeat till all the unsorted elements are placed in the right order

## Quick sort
Simple but efficient sorting algorithm - average time complexity is O(n logn)

Idea
- Identify the pivot element in the array (different approaches)
    - Pick first element as pivot
    - Pick last element as pivot (our approach)
    - Pick a random element as pivot
    - Pick median as pivot
- Traverse array from the first element to before last element. All elements less than the pivot element into a "left" array and everything greater than the pivot element into a "right" array
- Repeat the process for the individual "left" and "right" arrays till you have an array of length 1 which is sorted by definition

## Merge sort
Most efficient sort algo here - worse time complexity is O(n logn)

Idea
- Divide the array into sub arrays, each containing only one element (an array with one element is considered sorted)
Note: Each array is split in the middle to produce two new sub arrays
- Repeatedly merge the sub arrays to produce new SORTED sub arrays until there is only one sub array remaining. That will be the sorted array. (merge function takes care of sorting of the two sub arrays)

