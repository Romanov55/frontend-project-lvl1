import runGameEngine from '../index.js';
import randomNumber from '../rand.js';

const gameTask = 'What is the result of the expression?';

const minNumberOperator = 0;
const maxNumberOperator = 2;

const minNumberRand = 1;
const maxNumberRand = 100;

const operators = ['+', '-', '*'];

const calculateAnswer = (number1, number2, operator) => {
  if (operator === '+') {
    return number1 + number2;
  } if (operator === '-') {
    return number1 - number2;
  }
  return number1 * number2;
};

const getData = () => {
  const number1 = randomNumber(minNumberRand, maxNumberRand);
  const number2 = randomNumber(minNumberRand, maxNumberRand);

  const operator = operators[randomNumber(minNumberOperator, maxNumberOperator)];

  const rightAnswer = calculateAnswer(number1, number2, operator);

  const question = `${number1} ${operator} ${number2}`;

  return [question, String(rightAnswer)];
};

const startCalc = () => runGameEngine(getData, gameTask);

export default startCalc;
