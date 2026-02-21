console.log('I am learning JavaScript!');
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