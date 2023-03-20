
//In this problem I have to identify which of the elements of the array are odd numbers and 
// replace them with the number 8

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers = numbers.map(x => x % 2 === 0 ? x : 8);

console.log(numbers);  // [8, 2, 8, 4, 8, 6, 8, 8, 8, 10]