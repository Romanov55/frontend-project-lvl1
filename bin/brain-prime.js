#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { name, divisionWithoutRemainder } from '../src/index.js';

console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

let i = 0;
do {
  const randonNumber = Math.floor(Math.random() * (100));

  console.log(`Question: ${randonNumber}`);

  const massiv = [];

  const noRemainder = divisionWithoutRemainder(randonNumber,massiv);

  let example;

  if (noRemainder.length > 2) {
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
