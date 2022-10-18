#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { name } from '../src/index.js';

console.log('What number is missing in the progression?');

function progress(mul, count, number) {
  const sum = [];
  let num = number;

  for (let i = 1; i < count; i += 1) {
    num += mul;
    sum.push(num);
  }
  return sum;
}

let i = 0;
do {
  const rand = Math.floor(Math.random() * (100));
  const rand2 = Math.floor((Math.random() * (100)) / 5);

  const randomOperator = Math.floor(Math.random() * (11 - 1) + 0);

  const all = progress(rand, 11, rand2);

  const allDot = [];
  let example;

  for (let j = 0; j < 10; j += 1) {
    if (j !== randomOperator) {
      allDot.push(all[j]);
    } else {
      example = all[j];
      allDot.push('..');
    }
  }
  const allAll = allDot.join(' ');

  console.log(`Question: ${allAll}`);

  const answer = Number(readlineSync.question('Your answer: '));

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
