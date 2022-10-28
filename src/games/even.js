import runGameEngine from '../index.js';
import getRandomNumber from '../rand.js';

const gameTask = 'Answer "yes" if the number is even, otherwise answer "no".';

const minNumber = 1;
const maxNumber = 100;

const getData = () => {
  const question = getRandomNumber(minNumber, maxNumber);

  const isEven = question % 2 === 0 ? 'yes' : 'no';

  return [question, isEven];
};

const startEven = () => runGameEngine(getData, gameTask);

export default startEven;
