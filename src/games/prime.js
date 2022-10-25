import gameEngine from '../index.js';
import randomNumber from '../rand.js';

const gameTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function isPrime(n) {
  if (n < 2) {
    return 'no';
  }
  if (n === 2) {
    return 'yes';
  }

  let j = 2;
  const limit = Math.sqrt(n);
  while (j <= limit) {
    if (n % j === 0) {
      return 'no';
    }
    j += 1;
  }

  return 'yes';
}

const data = () => {
  const min = 1;
  const max = 100;
  const number = randomNumber(min, max);

  const question = `${number}`;

  const rightAnswer = isPrime(number);

  const result = [question, rightAnswer];
  return result;
};

const solutionPrime = () => gameEngine(data, gameTask);

export default solutionPrime;
