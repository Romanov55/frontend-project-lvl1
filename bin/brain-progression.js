#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { name } from '../src/index.js';

console.log('What number is missing in the progression?');

const progress = (mul, count, number) => {
  const sum = [];
  let num = number;

  for (let i = 1; i < count; i += 1) {
    num += mul;
    sum.push(num);
  }
  return sum;
};

let i = 0;
do {
  const randomNumber1 = Math.floor(Math.random() * (100));
  const randomNumber2 = Math.floor((Math.random() * (100)) / 5);
  const randomTen = Math.floor(Math.random() * (11 - 1) + 0);
  const maxNumbersString = 11;

  const allNumbers = progress(randomNumber1, maxNumbersString, randomNumber2);

  const massivQuestion = [];
  let example;

  for (let j = 0; j < 10; j += 1) {
    if (j !== randomTen) {
      massivQuestion.push(allNumbers[j]);
    } else {
      example = allNumbers[j];
      massivQuestion.push('..');
    }
  }
  const finalQuestion = massivQuestion.join(' ');

  console.log(`Question: ${finalQuestion}`);

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
