import { question } from 'readline-sync';
import runGameEngine from '../index.js';
import getRandomNumber from '../rand.js';

const gameTask = 'Answer "yes" if the number is even, otherwise answer "no".';

const minNumber = 1;
const maxNumber = 100;

const isEven = (question) => {
  if (question % 2 === 0) {
    return 'yes'
  }
  else {
    return 'no'
  }
}

const getData = () => {
  const question = getRandomNumber(minNumber, maxNumber);

  const rightAnswer = isEven(question);

  return [question, rightAnswer];
};

const startEven = () => runGameEngine(getData, gameTask);

export default startEven;
