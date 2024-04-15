"use strict";
// 1. Assign "Hello, World!" to this variable and print it.
let greeting = " Hello World ";
console.log(greeting);
// 2. Assign integer values and perform arithmetic operations.
let num1 = 6;
let num2 = 2;
let sum = num1 + num2;
let prod = num1 * num2;
let quotient = num1 / num2;
console.log(sum);
console.log(prod);
console.log(quotient);
// 3. Swap these values without using a new variable.
let a = 5;
let b = 4;
a = a + b;
b = a - b;
a = a - b;
console.log(a);
console.log(b);
// 4. type annotation try assigning a number to it and see what happens.
let message = '1234';
let numvalue = Number(message);
console.log(numvalue);
// 5. Use the modulus operator (%) to find the remainder.
let num3 = 10;
let num4 = 3;
let reminder;
reminder = num3 % num4;
console.log(reminder);
// 6. Increment this value by 1 in two different ways.
// 1.
let counter = 0;
counter++;
console.log(counter);
// 2. 
let count = 0;
count += 1;
console.log(count);
// 7. Write expressions using these.
let x = true;
let y = false;
let z = true;
let andResult = x && y && z;
console.log(andResult);
let orResult = x || y || z;
console.log(orResult);
let notResult = !x;
console.log(notResult);
// 8. Use +=, -=, *=, and /= on this variable.
let num = 10;
num += 1;
console.log(num);
num -= 1;
console.log(num);
num *= 1;
console.log(num);
num /= 2;
console.log(num);
// 9. Determine if this is even or odd.
let num5 = 10;
if (num5 % 2 == 0) {
    console.log("Even");
}
else {
    console.log("Odd");
}
// 10. Check if age is 18 or older to determine voting eligibility.
let age = 18;
if (age >= 18) {
    console.log("you are eligible to vote");
}
else {
    console.log("you are not eligible to vote");
}
// 11. Use conditionals to assign and print grades A, B, C, D, or F.
let score = 78;
if (score >= 90) {
    console.log('A');
}
else if (score >= 80) {
    console.log('B');
}
else if (score >= 70) {
    console.log('C');
}
else if (score >= 60) {
    console.log('D');
}
else {
    console.log('F');
}
// 12. Determine the largest among these three number.
let e = 4;
let f = 3;
let g = 2;
if (e >= f && e >= g) {
    console.log('x is the largest number');
}
else if (f >= e && f >= g) {
    console.log('y is the largest number');
}
else {
    console.log('z is the largest number');
}
// 13. Determine if this is a leap year.
let year = 2020;
if (year % 4 == 0 || year % 100 != 0 || year % 400 == 0) {
    console.log("Leap year");
}
// 14. Convert Fahrenheit to Celsius and print the result.
let fahrenheit = 100;
let celsius = (fahrenheit - 32) * 5 / 9;
console.log(celsius);
// 15. Check if a number is positive, negative, or zero.
let number = 10;
if (number > 0) {
    console.log("Positive");
}
else if (number < 0) {
    console.log("Negative");
}
else {
    console.log("Zero");
}
// 16. Print the multiplication table for this number up to 10.
let number1 = 5;
for (let i = 1; i <= 10; i++) {
    let result = number1 * i;
    console.log(`${number1} * ${i} = ${result}`);
}
