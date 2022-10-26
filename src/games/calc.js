import runGameEngine from '../index.js';
import randomNumber from '../rand.js';

const gameTask = 'What is the result of the expression?';

const min1 = 1;

const max1 = 3;
const max2 = 100;

const randomOperator = () => {
  const randomOper = randomNumber(min1, max1);

  if (randomOper === 0) {
    return '+';
  } if (randomOper === 1) {
    return '-';
  }
  return '*';
};

const calculateQuestionAndAnswer = (number1, number2, operator) => {
  let question;
  let rightAnswer;
  if (operator === '+') {
    question = `${number1} + ${number2}`;
    rightAnswer = number1 + number2;
  } else if (operator === '-') {
    question = `${number1} - ${number2}`;
    rightAnswer = number1 - number2;
  } else {
    question = `${number1} * ${number2}`;
    rightAnswer = number1 * number2;
  }
  const result = [question, rightAnswer];
  return result;
};

const calculateData = () => {
  const number1 = randomNumber(min1, max2);
  const number2 = randomNumber(min1, max2);

  const operator = randomOperator();

  const [question, rightAnswer] = calculateQuestionAndAnswer(number1, number2, operator);

  const result = [question, String(rightAnswer)];

  return result;
};

const startCalc = () => runGameEngine(calculateData, gameTask);

export default startCalc;
