#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { name, divisionWithoutRemainder, comparison } from '../src/index.js';

console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

let i = 0;
do {
  const randonNumber = Math.floor(Math.random() * (100));

  console.log(`Question: ${randonNumber}`);

  const massiv = [];

  const noRemainder = divisionWithoutRemainder(randonNumber, massiv);

  let example;

  if (noRemainder.length > 2) {
    example = 'no';
  } else {
    example = 'yes';
  }

  const answer = readlineSync.question('Your answer: ');

  comparison(example, answer, i);
  if (answer === 'yes' && example !== answer) {
    console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
    console.log(`Let's try again, ${name}!`);
    i += 3;
  } else if (answer === 'no' && example !== answer) {
    console.log("'no' is wrong answer ;(. Correct answer was 'yes'.");
    console.log(`Let's try again, ${name}!`);
    i += 3;
  }
  i += 1;
} while (i < 3);
