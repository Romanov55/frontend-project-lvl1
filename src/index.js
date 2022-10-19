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

export const comparison = (number1, number2, item, nam) => {
  if (number1 === number2 && item < 2) {
    console.log('Correct!');
  } else if (item === 2 && number1 === number2) {
    console.log('Correct!');
    console.log(`Congratulations, ${nam}!`);
  } else {
    console.log(`'${number2}' is wrong answer ;(. Correct answer was '${number1}'.`);
    console.log(`Let's try again, ${nam}!`);
  }
};

export const comparisonYesNo = (number1, number2, item, nam) => {
  if (number1 === number2 && item < 2) {
    console.log('Correct!');
  } else if (item === 2 && number1 === number2) {
    console.log('Correct!');
    console.log(`Congratulations, ${nam}!`);
  } else if (number2 !== 'no' && number1 !== number2) {
    console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
    console.log(`Let's try again, ${nam}!`);
  } else {
    console.log("'no' is wrong answer ;(. Correct answer was 'yes'.");
    console.log(`Let's try again, ${nam}!`);
  }
};
