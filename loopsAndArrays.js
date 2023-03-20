let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// while loop to change each element of the array to its square
let i = 0;
while (i < numbers.length) {
numbers[i] = Math.pow(numbers[i], 2); // The Math.pow() function returns the base raised to the exponent
i++;
}
console.log("The squared array:" + numbers);

// for loop to remove all even numbers from the array
for (let j = numbers.length - 1; j >= 0; j--) {
    if (numbers[j] % 2 === 0) {
    numbers.splice(j, 1); // The splice() method changes the contents of an array by removing existing elements.
    }
}
console.log("The array without even numbers:" + numbers);

// the do-while loop in for this example adds the number 10 to the array 'numbers'

do {
    n = 10;
    numbers.push(n);
} while (n < 20);

console.log(numbers);