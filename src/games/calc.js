import gameEngine from '../index.js';
import randomNumber from '../rand.js';

const gameTask = 'What is the result of the expression?';

const randomOperator = () => {
  const min2 = 1;
  const max2 = 3;
  const randomOperator = randomNumber(min2, max2);

  if (randomOperator === 0) {
    return '+'
  } else if (randomOperator === 1) {
    return '-'
  } else {
    return '*'
  }
}

const data = () => {
  const min1 = 1;
  const max1 = 50;
  const number1 = randomNumber(min1, max1);
  const number2 = randomNumber(min1, max1);

  let question;
  let rightAnswer;
  if (randomOperator() === '+') {
    question = `${number1} + ${number2}`;
    rightAnswer = number1 + number2;
  }
  else if (randomOperator() === '-') {
    question = `${number1} - ${number2}`;
    rightAnswer = number1 - number2;
  } else {
    question = `${number1} * ${number2}`;
    rightAnswer = number1 * number2;
  }
  const result = [(question), String(rightAnswer)];
  return result;
}

const solutionCalc = () => gameEngine(data, gameTask);

export default solutionCalc;
