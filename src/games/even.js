import runGameEngine from '../index.js';
import randomNumber from '../rand.js';

const gameTask = 'Answer "yes" if the number is even, otherwise answer "no".';

const minNumber = 1;
const maxNumber = 100;

const getData = () => {
  const question = randomNumber(minNumber, maxNumber);

  const rightAnswer = question % 2 === 0 ? 'yes' : 'no';

  return [question, rightAnswer];
};

const startEven = () => runGameEngine(getData, gameTask);

export default startEven;
