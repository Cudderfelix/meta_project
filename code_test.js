/* console.log('I am learning JavaScript!');
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet('Nakadamus'));
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(num => num * num);
console.log(squaredNumbers);
console.log(345*12);
console.log(13<3);
console.log(15*123);
console.log(10 == 10);


// if--else statement
let age =20;
let evenNumber = 50%2;
if (age % 2 === 0) {
    console.log('The Age is an even number');
}
else {
    console.log('This Age is an Odd number');
}
console.log(50 % 2);


// if -- elseif statement
let medalPosition = 'first';
if (medalPosition === 'first') {
    console.log('A gold medal has been won');
}
else if (medalPosition === 'second') {
    console.log('A Silver medal has been won');
}
else if (medalPosition === 'third'){
    console.log('A Bronze medal has been won');
}
else {
    console.log('No medal has been won');
}


// switch statement
let medalPosition1 = 'third';
switch (medalPosition1) {
    case 'first': 
    console.log('A gold medal has been won');
    break;
    case 'second':
    console.log('A Silver medal has been won');
    break;
    case 'third':
    console.log('A Bronze medal has been won');
    break;
    default:
    console.log('No medal has been won');
}

// looping constructs
//for loop
for (let i =22; i<=65; i++){
    console.log(i);
}

//while loop
let count =1;
while (count <=45) {
    console.log(count);
    count++;
}

// Writing functions
function arrayOutput (arr) {
    for (let i =0; i < arr.length; i++){
      console.log(arr[i]);
    }
}
let fruits = ['apple', 'cashew-nut', 'banana', 'oranges', 'grapes', 'mangoes','pawpaw','kiwi', 'watermelon','avocado'];
arrayOutput(fruits);

// write a bit of complex functions with if--else statements and loops
function complexFunction (arr) {
    for (let i=0; i < arr.length; i++) {
        if (arr.length == 1){
            console.log('Fruit name:', arr[i], 'is the first fruit');
        }
        else if (arr.length == 2){
            console.log('Fruit name:', arr[i], 'is the second fruit');
        }
        else if (arr.length == 3) {
            console.log('Fruit name:', arr[i], 'is the third fruit');
        }
        else {
            console.log('Fruit name:', arr[i], 'is part of the fruit list');
        }
    }
}
complexFunction(fruits);

//write a bit of complex functions with switch statements and loops
function complexSwitchFunction (arr) {
    for (let i= 0; i < arr.length; i++) {
      switch (arr.length) {
        case 1:
            console.log('Fruit name:', arr[i], 'is the first fruit');
            break;
        case 2:
            console.log('Fruit nameL',arr[i], 'is the second fruit');
            break;
        case 3:
            console.log('Fruit name:', arr[i], 'is the third fruit');
            break;
        case 4:
            console.log('Fruit name:', arr[i], 'is the fourth fruit');
            break;
        case 5:
            console.log('Fruit name:', arr[i], 'is the fifth fruit');
            break;
        case 6:
            console.log('Fruit name:', arr[i], 'is the sixth fruit');
            break;
        case 7:
            console.log('Fruit name:', arr[i], 'Is the seventh fruit');
            break;
        default:
            console.log('Fruit name:', arr[i], 'Is part of the fruit list');
      }  
    }
}
complexSwitchFunction(fruits);

// testing word matching functions
function wordMatch (word, match){
    for (let i=0; i < word.length; i++) {
        if (word[i] == match) {
            console.log ('The word', word[i], 'is a match to the word', match);
        }
        else {
            console.log('The word', word[i], 'is not a match to the word', match);
        }
    }
}
wordMatch('Javascript', 'a');

// object notation
let person = {
    name: 'Nakadamus',
    age: 30,
    location: 'Benue State',
    profession: 'Software Developer'
}
// dot notation
person.location= 'Anambra State';
console.log(person);

// bracket notation
person ['profession'] ='Kubernetes Engineer';

console.log(person);

//math methods
var random = Math.random() *100;
var rounded = Math.round(random);
console.log('The random & rounded number is:', rounded);

//object methods
let myName = {
    name: "Chukwuemeka - Eze",
    age: 39,
    location : "kingdom of Dahomey",
    profession: "Software Engineer",
    greet: function() {
        console.log('Hello! i\'m from the kingdom of Dahomey, nice to meet you!;');
    }
}
console.log(myName);
myName.greet();

//try catch error handling
try {
    console.log(a+b)
}
catch(err) {
    console.log('An error occurred', err.message);
    console.log('The error has been handled gracefully')
}
console.log('The encountered error did not crash the program, it was handled gracefully');

// Object Oriented Programming versus Functional Programming

let currencyOne = 'USD';
let currencyTwo = 'EUR';
let currencyThree = 'GBP';

function concatCurrency (cur1, cur2, cur3) {
console.log('The concated currency are:', cur1 + cur2 + cur3);
}
concatCurrency(currencyOne, currencyTwo, currencyThree);
*/

// Playing with return values in Javascript
function multiplyDigits(a, b) {
    let multiplication = a * b;
    return multiplication;
    console.log(multiplication);
}
multiplyDigits(14, 65);


// Testing out OOP concepts in Javascript
let addition = {
    num1: 12,
    num2: 13,
    add: function () {
        return this.num1 + this.num2;
    }
}
console.log(addition.add());


let subtraction = {
    num: 345,
    num2: 256,
    subtract: function () {
        let difference = this.num - this.num2;
        console.log('THe difference is:', difference);
    }
}
subtraction.subtract();

// Classes in OOP
class Calculator {
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }
    checkEngine() {
        console.log('The calchulator engine is working');
    }
    checkNumericFunction() {
        let sum = this.num1 + this.num2;
        console.log('The sum of the two numbers is:', sum);
    }
}
let myCalculator = new Calculator(12, 13);
myCalculator.checkEngine();
myCalculator.checkNumericFunction();


// Describing Polymorphism in OOP
class brain {
    useBrain() {
        console.log('My brain process information');
    }
}
class limbs extends brain {
    useBrain() {
        super.useBrain();
        console.log('My limbs get signals from my brain to effect mobility');
    }
}
class heart extends brain {
    useBrain() {
        console.log('My heart pumps blood to my brain for it to function properly');
    }
}

let myLimbs = new limbs();
let myHeart = new heart();
myLimbs.useBrain();
myHeart.useBrain();

console.log(new Date());