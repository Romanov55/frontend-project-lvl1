#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { name, comparison } from '../src/index.js';

console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

function isPrime(n) {
  if (n < 2) {
    return 'no';
  }
  if (n === 2) {
    return 'yes';
  }

  let j = 2;
  const limit = Math.sqrt(n);
  while (j <= limit) {
    if (n % j === 0) {
      return 'no';
    }
    j += 1;
  }

  return 'yes';
}

let i = 0;
do {
  const randonNumber = Math.floor(Math.random() * (100));

  console.log(`Question: ${randonNumber}`);

  const example = isPrime(randonNumber);

  const answer = readlineSync.question('Your answer: ');

  comparison(example, answer, i);
  if (answer !== 'no' && example !== answer) {
    console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
    console.log(`Let's try again, ${name}!`);
    i += 3;
  } else if (answer !== 'yes' && example !== answer) {
    console.log("'no' is wrong answer ;(. Correct answer was 'yes'.");
    console.log(`Let's try again, ${name}!`);
    i += 3;
  }
  i += 1;
} while (i < 3);
