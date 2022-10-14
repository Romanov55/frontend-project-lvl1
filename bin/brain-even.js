#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const name = readlineSync.question('May I have your name? ');

console.log(`Hello, ${name}!`);

console.log ("Answer 'yes' if number even otherwise answer 'no'");

let i = 0
do {
    const rand = Math.floor(Math.random() * (100))

    console.log('Question: ' + rand);

    const answer = readlineSync.question('Your answer: ');

    let result;
    if (rand % 2 === 0) {
    result = 'yes';
    }
    else {
    result = 'no';
    }

    if (result === answer && i < 2) {
        console.log('Correct!');
    }
    else if (i === 2 && result === answer) {
        console.log('Correct!');
        console.log('Congratulations, ' + name + '!');
    }
    else {
        if (answer === 'yes') {
            console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
            console.log("Let's try again, " + name + '!');
            i = i + 3;
        }
        else {
            console.log("'no' is wrong answer ;(. Correct answer was 'yes'.");
            console.log("Let's try again, " + name + '!');
            i = i + 3;
        }
    }
    i = i + 1;
} while (i < 3);