import runGameEngine from '../index.js';
import getRandomNumber from '../rand.js';

const gameTask = 'What is the result of the expression?';

const minNumberOperator = 0;

const minNumberRand = 1;
const maxNumberRand = 100;

const operators = ['+', '-', '*'];

const calculateAnswer = (number1, number2, operator) => {
  switch(operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      return 'Wrong'
  }
}

const getData = () => {
  const number1 = getRandomNumber(minNumberRand, maxNumberRand);
  const number2 = getRandomNumber(minNumberRand, maxNumberRand);

  const operator = operators[getRandomNumber(minNumberOperator, operators.length)];

  const rightAnswer = calculateAnswer(number1, number2, operator);

  const question = `${number1} ${operator} ${number2}`;

  return [question, String(rightAnswer)];
};

const startCalc = () => runGameEngine(getData, gameTask);

export default startCalc;
