import runGameEngine from '../index.js';
import randomNumber from '../rand.js';

const gameTask = 'Find the greatest common divisor of given numbers.';

const min = 1;

const max1 = 25;
const max2 = 100;

const commonDivisor = (number1, number2) => {
  if (number2 > number1) return commonDivisor(number2, number1);
  if (!number2) return number1;
  return commonDivisor(number2, number1 % number2);
};

const calculateData = () => {
  const number1 = randomNumber(min, max2);
  const number2 = randomNumber(min, max1);

  const question = `${number1} ${number2}`;

  const rightAnswer = commonDivisor(number1, number2);

  const result = [question, String(rightAnswer)];
  return result;
};

const startGcd = () => runGameEngine(calculateData, gameTask);

export default startGcd;
