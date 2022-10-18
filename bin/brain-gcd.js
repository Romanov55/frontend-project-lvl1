#!/usr/bin/env node

import readlineSync from 'readline-sync';
import {welcome, name} from '../src/index.js';

welcome;

console.log('Find the greatest common divisor of given numbers.');

let i = 0;
do {
  const rand = Math.floor(Math.random() * (100));
  const rand2 = Math.floor(Math.random() * (100)/5+2);
    
  console.log(`Question: ${rand} ${rand2}`);

  const answer = Number(readlineSync.question('Your answer: '));

  let result = [];
  let result2 = [];

  for (let i = 0; i <= rand; i += 1) {
    if (rand % i === 0) {
      result.push(i)
    }
  }
  for (let i = 0; i <= rand2; i += 1) {
    if (rand2 % i === 0) {
      result2.push(i)
    }
  }
  
  let big;
  if (result.length > result2.length) {
    big = result.length;
  }
  else {
    big = result2.length;
  }
  
  let example; 

  for (let i = 0; i < big; i += 1) {
    if (result[i] === result2[i]) {
      example = result[i];
    }
  }

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