// Calculate area of a rectangle
let lengthrectangle = 5;
let widthrectangle = 4;

area = lengthrectangle * widthrectangle;
console.log(`The area of the rectangle is:${area}`)

//Temperature Converter

let celsius = 38;
let convertofahrenheit = ((celsius*1.8)+32)
let fahrenheit = 87; 
let convertocelsius= ((fahrenheit-32)/1.8)
console.log(`${celsius}°C is ${convertofahrenheit}°F`)
console.log(`${fahrenheit}°F is ${convertocelsius}°C`)

// sum of all numbers of array
let Numbers = [23,54,32,87,47]
let sum = 0;
for(let i in Numbers){
    sum += Numbers[i]
    
}
console.log(`sum of all numbers : ${sum}`)

// Maximum number
let numbers1 = [16,4,2,0,19,6]
let max = Math.max(...numbers1)
console.log(max)

// Reverse Array

let numbers2 = [1,2,3,4,5,6,7,8,9,10]
console.log(numbers2.reverse())

// stars pattern

let n = 5;
let stars = "";
for (let i = 1; i<=n; i++){
    for (let j = 0; j < i ; j++){
        stars += "*";
    }
    stars += "\n";
}
console.log(stars);

