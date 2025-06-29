# Arrays
An array is a DS that can hold a collecton of values.

Arrays can contain a mix of different data types. You can store strings, booleans, numbers or even objects all in the same array.

Arrays are resizable. You don't have to declare the size of an array before creating it.

JS arrays are zero-indexed and the insertion order is maintained.

Arrays are iterable. They can be used with a for of loop.

# Objects
An object is an unordered collection of key-value pairs. The key must either be a string or symbol data type whereas the value can be of any data type.

To retrieve a value, you can use the corresponding key. This can be achieved using the dot notation or the bracket notation.

Unlike an array, an object is not an iterable. You cannost use it with a for of loop. However, you can iterate over its keys using for-in loop.

# Sets
A set is a DS that can hold a collection of values. The values however must be unique.

Set can contain a mix of different data types. You can store strings, booleans, numbers or even objects all in the same set.

Sets are dynamically sized. You don't have to declare the size of a set before creating it.

Sets do not maintain an insertion order.

Sets are iterables. They can be used with a for of loop.

## Set vs. Arrays
Arrays can contain duplicate values whereas sets cannot

Insertion order is maintained with arrays but it is not the case with sets

Searching and deleting an element in the set is faster compared to arrays

# Maps
A map is an ordered collection of key-value pairs. Both keys and values can be of any data type.

To retrieve a value, you can use the corresponding key

Maps are iterables. They can be used with a for of loop.

## Object vs Map
Objects are unordered whereas maps are ordered.

Keys in objects can only be strings or symbols whereas in maps they can be of any type.

An object has a prototype and may contain a few default keys which may collide with your own keys if you're not careful. A map on the other hand does not contain any keys by default.

Objects are not iterables whereas maps are iterables.

The number of items in an object must be determined manually whereas it is readily available with the size property in a map.

Apart from storing data, you can attach functionality to an object whereas maps are restricted to just storing data.

