#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { name, divisionWithoutRemainder, comparison } from '../src/index.js';

console.log('Find the greatest common divisor of given numbers.');

let i = 0;
do {
  const randomNumber1 = Math.floor(Math.random() * (100)+1);
  const randomNumber2 = Math.floor((Math.random() * (100)) / 5 + 2);

  console.log(`Question: ${randomNumber1} ${randomNumber2}`);

  const answer = Number(readlineSync.question('Your answer: '));

  const massiv1 = [];
  const massiv2 = [];

  for (let j = 0; j < randomNumber1; j += 1) {
    if (randomNumber1 % j === 0) {
      massiv1.push(j);
    }
  }

  for (let j = 0; j < randomNumber2; j += 1) {
    if (randomNumber2 % j === 0) {
      massiv2.push(j);
    }
  }

  let moreResult;
  if (massiv1.length > massiv2.length) {
    moreResult = massiv1.length;
  } else {
    moreResult = massiv2.length;
  }

  let example;

  for (let q = 0; q < moreResult; q += 1) {
    if (massiv1[q] === massiv2[q]) {
      example = massiv1[q];
    }
  }

  comparison(example, answer, i);

  if (example !== answer) {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${example}'.`);
    console.log(`Let's try again, ${name}!`);
    i += 3;
  }
  i += 1;
} while (i < 3);
