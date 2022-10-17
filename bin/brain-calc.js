#!/usr/bin/env node

import readlineSync from 'readline-sync';
import {welcome, name} from '../src/index.js';

welcome

let i = 0;
do {
  const rand = Math.floor(Math.random() * (100));
  const rand2 = Math.floor(Math.random() * (100));

  const randomOperator = Math.floor(Math.random() * (3 - 0) + 0);

  let example;

  if (randomOperator === 0) {
    console.log(`Question: ${rand} + ${rand2}`);
    example = rand + rand2;
  }
  else if (randomOperator === 1) {
    console.log(`Question: ${rand} - ${rand2}`);
    example = rand - rand2;
  }
  else {
    console.log(`Question: ${rand} * ${rand2}`);
    example = rand * rand2;
  }

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