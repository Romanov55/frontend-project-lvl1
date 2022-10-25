import gameEngine from '../index.js';
import randomNumber from '../rand.js';

const gameTask = 'Find the greatest common divisor of given numbers.';

const commonDivisor = (number1, number2) => {
  if (number2 > number1) return commonDivisor(number2, number1);
  if (!number2) return number1;
  return commonDivisor(number2, number1 % number2);
};

const data = () => {
  const min1 = 1;
  const max1 = 100;
  const number1 = randomNumber(min1, max1);

  const min2 = 1;
  const max2 = 25;
  const number2 = randomNumber(min2, max2);

  const question = `${number1} ${number2}`;

  const rightAnswer = commonDivisor(number1, number2);

  const result = [question, String(rightAnswer)];
  return result;
};

const solutionGcd = () => gameEngine(data, gameTask);

export default solutionGcd;
