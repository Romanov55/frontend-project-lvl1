import runGameEngine from '../index.js';
import randomNumber from '../rand.js';

const gameTask = 'Answer "yes" if the number is even, otherwise answer "no".';

const min = 1;
const max = 100;

const answerCalculation = (number) => {
  let rightAnswer;
  if (number % 2 === 0) {
    rightAnswer = 'yes';
  } else {
    rightAnswer = 'no';
  }
  return rightAnswer;
};

const calculateData = () => {
  const number = randomNumber(min, max);

  const question = `${number}`;

  const rightAnswer = answerCalculation(number);

  const result = [question, rightAnswer];
  return result;
};

const startEven = () => runGameEngine(calculateData, gameTask);

export default startEven;
