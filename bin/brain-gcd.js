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

  const bigDiviso1 = divisionWithoutRemainder(randomNumber1, massiv1);
  const bigDivisor2 = divisionWithoutRemainder(randomNumber2, massiv2);

  let moreResult;
  if (bigDiviso1.length > bigDivisor2.length) {
    moreResult = bigDiviso1.length;
  } else {
    moreResult = bigDivisor2.length;
  }

  let example;

  for (let q = 0; q < moreResult; q += 1) {
    if (bigDiviso1[q] === bigDivisor2[q]) {
      example = bigDiviso1[q];
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
