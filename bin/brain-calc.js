#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { name } from '../src/index.js';

console.log('What is the result of the expression?');

let i = 0;
do {
  const randomNumber1 = Math.floor(Math.random() * (100));
  const randomNumber2 = Math.floor(Math.random() * (100));

  const randomOperator = Math.floor(Math.random() * (3 - 0) + 0);

  let example;

  if (randomOperator === 0) {
    console.log(`Question: ${randomNumber1} + ${randomNumber2}`);
    example = randomNumber1 + randomNumber2;
  } else if (randomOperator === 1) {
    console.log(`Question: ${randomNumber1} - ${randomNumber2}`);
    example = randomNumber1 - randomNumber2;
  } else {
    console.log(`Question: ${randomNumber1} * ${randomNumber2}`);
    example = randomNumber1 * randomNumber2;
  }

  const answer = Number(readlineSync.question('Your answer: '));

  if (example === answer && i < 2) {
    console.log('Correct!');
  } else if (i === 2 && example === answer) {
    console.log('Correct!');
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${example}'.`);
    console.log(`Let's try again, ${name}!`);
    i += 3;
  }
  i += 1;
} while (i < 3);
