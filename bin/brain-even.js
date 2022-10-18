#!/usr/bin/env node

import readlineSync from 'readline-sync';
import {welcome, name} from '../src/index.js';

welcome

console.log("Answer 'yes' if number even otherwise answer 'no'");

let i = 0;
do {
  const rand = Math.floor(Math.random() * (100));

  console.log(`Question: ${rand}`);

  const answer = readlineSync.question('Your answer: ');

  let example;
  if (rand % 2 === 0) {
    example = 'yes';
  } else {
    example = 'no';
  }

  if (example === answer && i < 2) {
    console.log('Correct!');
  } else if (i === 2 && example === answer) {
    console.log('Correct!');
    console.log(`Congratulations, ${name}!`);
  } else if (answer === 'yes') {
    console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
    console.log(`Let's try again, ${name}!`);
    i += 3;
  } else {
    console.log("'no' is wrong answer ;(. Correct answer was 'yes'.");
    console.log(`Let's try again, ${name}!`);
    i += 3;
  }
  i += 1;
} while (i < 3);
