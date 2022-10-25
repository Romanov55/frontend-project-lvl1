import gameEngine from '../index.js';
import randomNumber from '../rand.js';

const gameTask = 'Answer "yes" if the number is even, otherwise answer "no".';

const data = () => {
  const min = 1;
  const max = 100;
  const number = randomNumber(min, max)

  const question = `${number}`;

  let rightAnswer;
  if (number % 2 === 0) {
    rightAnswer = 'yes';
  } else {
    rightAnswer = 'no';
  }
  const result = [question, rightAnswer]
  return result;
}

const solutionEven = () => gameEngine(data, gameTask);

export default solutionEven;
