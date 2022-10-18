#!/usr/bin/env node

import readlineSync from 'readline-sync';
import {welcome, name} from '../src/index.js';

welcome;

console.log('What number is missing in the progression?')

let i = 0;
do {
  const rand = Math.floor(Math.random() * (100));
  const rand2 = Math.floor(Math.random() * (100)/5);

  const randomOperator = Math.floor(Math.random() * (11 - 1) + 0);

  const all = progress(rand, 11, rand2);

  let allDot = [];
  let example;

  for (let i = 0; i < 10; i += 1) {
    if (i !== randomOperator) {
      allDot.push(all[i]);
    }
    else {
      example = all[i];
      allDot.push('..');
    }
  }
  const allAll = allDot.join(' ');

  console.log(`Question: ${allAll}`);

  const answer = Number(readlineSync.question('Your answer: '));

  if (example === answer && i < 2) {
    console.log('Correct!');
  } 
  else if (i === 2 && example === answer) {
    console.log('Correct!');
    console.log(`Congratulations, ${name}!`);
  }
  else {
    console.log( `'${answer}' is wrong answer ;(. Correct answer was '${example}'.`);
    console.log(`Let's try again, ${name}!`);
    i += 3;
  }
  i += 1;
} while (i < 3);

function progress(mul, count, number) {
  let sum = [];

  for(let i = 1; i < count; i++) {
    number += mul;
    sum.push(number);
  }
  return sum;
}