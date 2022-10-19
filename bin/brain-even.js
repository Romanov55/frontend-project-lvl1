#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { name, comparison } from '../src/index.js';

console.log('Answer "yes" if the number is even, otherwise answer "no".');

let i = 0;
do {
  const randonNumber = Math.floor(Math.random() * (100));

  console.log(`Question: ${randonNumber}`);

  const answer = readlineSync.question('Your answer: ');

  let example;
  if (randonNumber % 2 === 0) {
    example = 'yes';
  } else {
    example = 'no';
  }

  comparison(example, answer, i);
  if (answer !== 'no' && example !== answer) {
    console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
    console.log(`Let's try again, ${name}!`);
    i += 3;
  } else if (example !== answer && answer !== 'yes') {
    console.log("'no' is wrong answer ;(. Correct answer was 'yes'.");
    console.log(`Let's try again, ${name}!`);
    i += 3;
  }
  i += 1;
} while (i < 3);
