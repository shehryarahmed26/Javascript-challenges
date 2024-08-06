//  ******************************* Day 3 *********************************
// Control Structure -->

// Task#1 --> Write a program to check if a number is possitive, negative, or zero and
// log the result to the console.

let num = 2

if (num < 0) {
    console.log('Number is Negative');
    
}
else if (num == 0) {
    console.log('Number is zero');
    
}
else {
    console.log('Number is Positive');
    
}

// Task#2 --> write a program to check if a person is eligible to vote
// (age >= 18) and log the result to the console.

let age = 20;

if (age >= 18) {
    console.log('Congrats, you are eligible for vote');
    
}
else {
    console.log('sorry, you cant vote');
    
}

// Task#2 --> write a program to find the largest of three numbers using nested
// if else statements.

let num1 = 10;
let num2 = 20;
let num3 = 30;

if (num1 > num2) {
    if (num1 > num3) {
        console.log('num1 is largest');
        
    }
}
if (num2 > num1) {
    if (num2 > num3) {
        console.log('num2 is largest');
        
    }
}
if (num3 > num1) {
    if (num3 > num2) {
        console.log('num3 is largest');
        
    }
}

// Switch Case --> 

// Task#4 Write a porgram that uses a switch case to determine the day of the
// week based on a number (1-7) and log the day name to the console.

let day = 5;

switch (day) {
    case 1:
        console.log('Monday');
        break;
        
        case 2:
        console.log('Tuesday');
        break;

        case 3:
        console.log('Wednesday');
        break;

        case 4:
        console.log('Thursday');
        break;

        case 5:
        console.log('Friday');
        break;

        case 6:
        console.log('Saturday');
        break;

        case 7:
        console.log('Sunday');
        break;

    default:
        break;
}

// Task#5 --> Write a program that uses a switch case to assign a grade
// (A, B, C, D, E, F) based on a score and log the grade to the console.

let score = 70;
let grade;

switch (score) {
    case 70:
        grade = 'A';
        break;

        case 60:
        grade = 'B';
        break;

        case 50:
        grade = 'C';
        break;

        case 40:
        grade = 'D';
        break;

        case 30:
        grade = 'F';
        break;
}
console.log(grade);

// Task#6 --> Write a program that uses the ternery operator to check if a 
// number is even or odd and log the result to the console.

let per = 8;
let result = per % 2 === 0 ? 'Even' : 'Odd';
console.log(result);



