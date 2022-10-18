#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { name } from '../src/index.js';

console.log('Find the greatest common divisor of given numbers.');

let i = 0;
do {
  const randomNumber1 = Math.floor(Math.random() * (100));
  const randomNumber2 = Math.floor((Math.random() * (100)) / 5 + 2);

  console.log(`Question: ${randomNumber1} ${randomNumber2}`);

  const answer = Number(readlineSync.question('Your answer: '));

  const result1 = [];
  const result2 = [];

  for (let j = 0; j <= randomNumber1; j += 1) {
    if (randomNumber1 % j === 0) {
      result1.push(j);
    }
  }
  for (let c = 0; c <= randomNumber2; c += 1) {
    if (randomNumber2 % c === 0) {
      result2.push(c);
    }
  }

  let moreResult;
  if (result1.length > result2.length) {
    moreResult = result1.length;
  } else {
    moreResult = result2.length;
  }

  let example;

  for (let q = 0; q < moreResult; q += 1) {
    if (result1[q] === result2[q]) {
      example = result1[q];
    }
  }

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
