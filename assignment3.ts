 // 1. Assign "Hello, World!" to this variable and print it.
 let  greeting = " Hello World ";
console.log(greeting);

// 2. Assign integer values and perform arithmetic operations.
let num1 :number = 6;
let num2 :number = 2;
let sum :number = num1 + num2;
let prod :number = num1 * num2;
let quotient :number = num1 /num2
console.log(sum);
console.log(prod);
console.log(quotient);

 // 3. Swap these values without using a new variable.
 let a : number = 5;
let b : number = 4;
a = a+b;
b = a-b;
a = a-b;

console.log(a);
console.log(b);

// 4. type annotation try assigning a number to it and see what happens.
let message : string = '1234';
let numvalue : number = Number(message);

console.log(numvalue);

// 5. Use the modulus operator (%) to find the remainder.
let num3 : number = 10;
let num4 : number = 3;
let reminder :number;
reminder =  num3 % num4;
console.log(reminder);

// 6. Increment this value by 1 in two different ways.
// 1.
let counter : number = 0;
counter ++;

console.log(counter);
// 2. 
let count : number = 0;
count +=1;
console.log(count);

// 7. Write expressions using these.
let x: boolean = true;
let y: boolean = false;
let z: boolean = true;
let andResult: boolean = x && y && z;
console.log(andResult); 

let orResult: boolean = x || y || z;
console.log(orResult); 

let notResult: boolean = !x;
console.log(notResult);

// 8. Use +=, -=, *=, and /= on this variable.
let num : number = 10;
num +=1;
console.log(num);

num -=1;
console.log(num);

num *=1;
console.log(num);

num /=2;
console.log(num);

// 9. Determine if this is even or odd.
let num5 : number = 10;
if (num5 % 2 == 0) {
    console.log("Even");
} else{
   console.log("Odd");
}

// 10. Check if age is 18 or older to determine voting eligibility.
let age : number =18;
if (age>=18) {
  console.log("you are eligible to vote"); 
} else {
  console.log("you are not eligible to vote"); 
}

// 11. Use conditionals to assign and print grades A, B, C, D, or F.
let score : number = 78;
if (score >= 90) {
        console.log('A');
    } else if (score >= 80) {
        console.log('B');
    } else if (score >= 70) {
      console.log('C');
    } else if (score >= 60) {
      console.log('D');
    } else {
      console.log('F');
    }

// 12. Determine the largest among these three number.
let e : number = 4;
let f : number = 3;
let g : number = 2;
if (e >= f && e >= g) {
  console.log('x is the largest number');
} else if (f >= e && f >= g) {
  console.log('y is the largest number');
} else {
  console.log('z is the largest number');
}

// 13. Determine if this is a leap year.
let year : number = 2020;
if (year % 4 == 0 || year % 100 != 0 || year % 400 == 0) {
    console.log("Leap year");
}

// 14. Convert Fahrenheit to Celsius and print the result.
let fahrenheit : number = 100;
let celsius : number = (fahrenheit - 32) * 5 / 9;
console.log(celsius);

// 15. Check if a number is positive, negative, or zero.
let number : number = 10;
if (number > 0) {
    console.log("Positive");
} else if (number < 0) {
    console.log("Negative");

} else {
    console.log("Zero");
}

// 16. Print the multiplication table for this number up to 10.
let number1 : number = 5;
for (let i = 1; i <= 10; i++) { 
    let result = number1 * i;
    console.log(`${number1} * ${i} = ${result}`);
}
