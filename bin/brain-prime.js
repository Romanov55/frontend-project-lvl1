#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { name, comparisonYesNo } from '../src/index.js';

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

  comparisonYesNo(example, answer, i, name);
  if (answer !== 'no' && example !== answer) {
    i += 3;
  }
  i += 1;
} while (i < 3);
