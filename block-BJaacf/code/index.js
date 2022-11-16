// 1. Create an array named numbers and store 5 number values in it
let numbers = [1, 2, 3, 4, 5]
// 2. Calculate the sum of array items and print it to the console using console.log()
let sum = 0;
for(let i=0; i<numbers.length; i++){
    sum += numbers[i];
}
console.log(sum);
// 3. Calculate the average of array items and print it to the console using console.log()
console.log(sum/numbers.length);
// 4. Find the highest number in the array and print it to the console using console.log()
let highestNumber = numbers[0];
for(let i=0; i<number.length; i++){
    if(highestNumber<numbers[i]){
        highestNumber=numbers[i];
    }
}
console.log(highestNumber);
// 5. Find the lowest number in the array and print it to the console using console.log()
let lowestNumber = numbers[0];
for (let i=0; i<numbers.length; i++){
    if (lowestNumber>numbers[i]){
        lowestNumber = numbers[i];
    }
}
// 6. Find the even numbers in the array and print them to the console using console.log()
let evenNumbers = [];
for (let i=0; i<numbers.length; i++){
    if(numbers[i] % 2 === 0){
        evenNumbers.push(numbers[i]);
    }
}
console.log(evenNumbers);

// 7. Find the odd numbers in the array and print them to the console using console.log()
let oddNumbers = [];
for (let i=0; i<numbers.length; i++){
    if(numbers[i] % 2 !== 0){
        evenNumbers.push(numbers[i]);
    }
}
console.log(oddNumbers);
// 8. Find the numbers in the array that is divisible by 5 and print them to the console using console.log()
let divisibleByfive = [];
for (let i=0; i<numbers.length; i++){
    if(numbers[i] % 5 == 0){
        divisibleByfive.push(numbers[i]);
    }
}
console.log(divisibleByfive);
// 9. Log all the element of the array one by one
for(i=0; i<numbers.length; i++){
    console.log(numbers[i])
}
// 10. Find all the number in the array that is divisible by 3
for (let number of numbers) {
    if (number % 3 == 0){
        console.log(number, "divisible by 3");
    }
}
