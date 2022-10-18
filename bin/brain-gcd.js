#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { name } from '../src/index.js';

console.log('Find the greatest common divisor of given numbers.');

let i = 0;
do {
  const rand = Math.floor(Math.random() * (100));
  const rand2 = Math.floor((Math.random() * (100)) / 5 + 2);

  console.log(`Question: ${rand} ${rand2}`);

  const answer = Number(readlineSync.question('Your answer: '));

  const result = [];
  const result2 = [];

  for (let j = 0; j <= rand; j += 1) {
    if (rand % j === 0) {
      result.push(j);
    }
  }
  for (let c = 0; c <= rand2; c += 1) {
    if (rand2 % c === 0) {
      result2.push(c);
    }
  }

  let big;
  if (result.length > result2.length) {
    big = result.length;
  } else {
    big = result2.length;
  }

  let example;

  for (let q = 0; q < big; q += 1) {
    if (result[q] === result2[q]) {
      example = result[q];
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
