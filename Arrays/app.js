//  ******************************** Day 6 ********************************

// Arrays --> 

// Array Creation and Access --> 

// Create a array of numbers 1 to 5 and log the aray to the console.
let numarr = [1, 2, 3, 4, 5]
console.log(numarr);

// Access the first and last element of the array and log them to the console.

console.log(numarr[0]);
console.log(numarr[numarr.length -1]);

// Array Methods Basic --> 

// use the push method to add a new number to the end of the array and log 
// the updated array


numarr.push(6)
console.log(numarr);

// use the pop method to remove the last element from the array and log the
// updated array.

numarr.pop()
console.log(numarr);

// use the shift method to remove the first element from the array and log
// the updated array.

numarr.shift()
console.log(numarr);

// use the unshift method to add a new element to the beginnning of the array
// and log the updated array

numarr.unshift(18)
console.log(numarr);

// Array Methods Intermediate --> 

let maparr = numarr.map((x) => x * 2)
console.log(maparr);

let cities = ['karachi', 'lahore', 'islamabad']
console.log(cities);

let citiesupdate = cities.map((i) => {
     return `${i},  Pakistan`
})
console.log(citiesupdate);

let updatearr = numarr.reduce((acc, num,)  => acc + num, 0 )
console.log(updatearr);









