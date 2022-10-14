#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const name = readlineSync.question('May I have your name? ');

console.log(`Hello, ${name}!`);

console.log ("Answer 'yes' if number even otherwise answer 'no'");

const rand = Math.random();
let first = String(rand)[5];
console.log(first)

console.log('Question: ' + first);

const answer = readlineSync.question('Your answer: ');


let even;
let result;
if (first % 2 === 0) {
result = 'yes';
}
else {
   result = 'no';
}

if (result === answer) {
    console.log('Correct!');
    console.log('Question: ' + first);
}
else {
    if (answer === 'yes') {
        console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
        console.log("Let's try again, " + name + '!');
    }
    else {
        console.log("'no' is wrong answer ;(. Correct answer was 'yes'.");
        console.log("Let's try again, " + name + '!');
    }
}
