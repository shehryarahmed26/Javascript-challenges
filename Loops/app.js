// *********************** Day-4 **********************************

// Loops -->

// For Loop -->

// write a program to print numbers from 1 to 10 using a for loop.

let num = 10;
for (let i = 0; i <= num; i++) {
    console.log(i);
    
}

// Write a program to print a table of 5 using a for loop.

let table = 5;
for (let i = 1; i <= 10; i++) {
    console.log(`${table} x ${i} = ${table * i}`);
    
}

// While Loop -->

// write a program to calculate the sum of the numbers 1 to 10 using 
// while loop.

let sum = 0;
let i = 1;
while (i <= 10 ) {
    sum += i
    i++
}
console.log(sum);
let j = 10;

while (j >= 1 ) {
    j--
    console.log(j);
    
}

// let str = '*'
for (let i = 0; i < 1; i++) {
    console.log('*');
    for (let j = 0; j < 1; j++ ) {
        console.log('*' + '*');
        
    }
    for (let s = 0; s < 1; s++ ) {
        console.log('*' + '*');
        
    }
    for (let m = 0; m < 1; m++ ) {
        console.log('*' + '*' + '*');
        
    }
    for (let p = 0; p < 1; p++ ) {
        console.log('*' + '*' + '*' + '*');
        
    }
    for (let x = 0; x < 1; x++ ) {
        console.log('*' + '*' + '*' + '*' + '*');
        
    }
    
}

// Write a pogram to print numbers from 1 to 10, but skip the number 5 using
// the continue statement.

for (let i = 0; i <= 10; i++ ) {

    if (i == 5) {
        continue;
    }
    console.log(i);
    
}
for (let i = 0; i <= 10; i++ ) {

    if (i == 7) {
        break;
    }
    console.log(i);
    
}
