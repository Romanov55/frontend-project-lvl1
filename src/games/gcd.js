import runGameEngine from '../index.js';
import getRandomNumber from '../rand.js';

const gameTask = 'Find the greatest common divisor of given numbers.';

const minNumber = 1;

const maxNumber = 25;
const maxNumberRand = 100;

const getCommonDivisor = (number1, number2) => {
  if (number2 > number1) return getCommonDivisor(number2, number1);
  if (!number2) return number1;
  return getCommonDivisor(number2, number1 % number2);
};

const getData = () => {
  const number1 = getRandomNumber(minNumber, maxNumber);
  const number2 = getRandomNumber(minNumber, maxNumberRand);

  const question = `${number1} ${number2}`;

  const rightAnswer = getCommonDivisor(number1, number2);

  return [question, String(rightAnswer)];
};

const startGcd = () => runGameEngine(getData, gameTask);

export default startGcd;
