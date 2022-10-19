import readlineSync from 'readline-sync';

export const welcome = console.log('Welcome to the Brain Games!');

export const name = readlineSync.question('May I have your name? ');

export const hello = console.log(`Hello, ${name}!`);

export const divisionWithoutRemainder = (number, result) => {
  for (let j = 0; j < number; j += 1) {
    if (number % j === 0) {
      result.push(j);
    }
  }
  return result;
};

export const comparison = (number1, number2, item) => {
  if (number1 === number2 && item < 2) {
    console.log('Correct!');
  } else if (item === 2 && number1 === number2) {
    console.log('Correct!');
    console.log(`Congratulations, ${name}!`);
  }
};
