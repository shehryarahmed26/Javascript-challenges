//  ************************ Day 8 ***********************************

// ES6+ Features --> 

// Template Literals --> 

let name = 'shehryar'
let age = 20;
let intro = `My Name is ${name} and im ${age} years old`
console.log(intro);

// Destructuring --> 

// Array Destructuring -->

let arr = [1, 2, 3, 4, 5]
let firstval = arr[arr.length -1]
console.log(firstval);
let heroes = ['Spiderman', 'Superman', 'Batman', 'Thor', 'Captain America']
let [first, , third] = heroes
console.log(`first ${first}`);
console.log(`third ${third}`);


// Object Destructuring --> 

let user = {
    name: 'Shehryar',
    email: 'shehryarahmed268@gmail.com',
    password: 'randompassword'
}
let {email} = user
console.log(email);
let {password} = user
console.log(password);

// Spread and rest operators -->

// use the spread operator to create a new array that includes all elements
// of an existing array plus additional elements, and log the new array to
// the console.

let arrr = [1, 2, 3, 4]
let newarr = [...arrr, 5, 6]
console.log(newarr);

// use the rest operator in a function to accept an arbitary number of arguments
// sum them, and return the result.

function restoperator(...rest) {
    let result = rest.reduce((acc, num) => acc + num, 0)
    return result
}
console.log(restoperator(1, 2, 3, 4, 5));

// Rest Operator --> 

let marvel = ['Ironman', 'Thor', 'Hulk', 'Captain-America']
let [a, b, ...remaining] = marvel
console.log(remaining);

let username = 'shehryar'
let useremail = 'shehryarahmed268@gmail.com'

let newuser = {
    username,
    useremail
}
console.log(newuser);





 
