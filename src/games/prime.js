import runGameEngine from '../index.js';
import randomNumber from '../rand.js';

const gameTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const min = 1;
const max = 100;

const primeNumberCheck = (n) => {
  if (n < 2) {
    return false;
  }
  if (n === 2) {
    return true;
  }

  let j = 2;
  const limit = Math.sqrt(n);
  while (j <= limit) {
    if (n % j === 0) {
      return false;
    }
    j += 1;
  }

  return true;
};

const calculateData = () => {
  const number = randomNumber(min, max);

  const question = `${number}`;

  const rightAnswer = primeNumberCheck(number) ? 'yes' : 'no';

  const result = [question, rightAnswer];
  return result;
};

const startPrime = () => runGameEngine(calculateData, gameTask);

export default startPrime;
