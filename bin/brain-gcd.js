#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { name, divisionWithoutRemainder, comparison } from '../src/index.js';

console.log('Find the greatest common divisor of given numbers.');

let i = 0;
do {
  let randomNumber1 = Math.floor(Math.random() * (100)+1);
  let randomNumber2 = Math.floor((Math.random() * (100)) / 5 + 2);

  console.log(`Question: ${randomNumber1} ${randomNumber2}`);

  const answer = Number(readlineSync.question('Your answer: '));

  let example;
  while (randomNumber1 != randomNumber2) {
  if (randomNumber1 > randomNumber2) {
    randomNumber1 = randomNumber1 -randomNumber2;
  }
  else {
    randomNumber2 = randomNumber2 - randomNumber1;
  }
}
example = randomNumber1;

  comparison(example, answer, i);

  if (example !== answer) {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${example}'.`);
    console.log(`Let's try again, ${name}!`);
    i += 3;
  }
  i += 1;
} while (i < 3);
