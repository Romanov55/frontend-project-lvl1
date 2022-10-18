#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { name } from '../src/index.js';

console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

let i = 0;
do {
  const rand = Math.floor(Math.random() * (100));

  console.log(`Question: ${rand}`);

  const numbers = [];

  for (let j = 0; j < rand; j += 1) {
    if (rand % j === 0) {
      numbers.push(j);
    }
  }

  let example;

  if (numbers.length > 2) {
    example = 'no';
  } else {
    example = 'yes';
  }

  const answer = readlineSync.question('Your answer: ');

  if (example === answer && i < 2) {
    console.log('Correct!');
  } else if (i === 2 && example === answer) {
    console.log('Correct!');
    console.log(`Congratulations, ${name}!`);
  } else if (answer === 'yes') {
    console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
    console.log(`Let's try again, ${name}!`);
    i += 3;
  } else {
    console.log("'no' is wrong answer ;(. Correct answer was 'yes'.");
    console.log(`Let's try again, ${name}!`);
    i += 3;
  }
  i += 1;
} while (i < 3);
