import runGameEngine from '../index.js';
import randomNumber from '../rand.js';

const gameTask = 'What number is missing in the progression?';

const min1 = 0;
const min2 = 1;

const max2 = 25;
const max3 = 50;

const createProgression = (number1, number2, lengthOfProgression) => {
  const massiv = [];

  for (let i = 1; i < lengthOfProgression; i += 1) {
    massiv.push(number1 + number2 * i)
  }
  return massiv;
};

const calculateData = () => {
  const number1 = randomNumber(min2, max3);
  const number2 = randomNumber(min2, max2);
  const lengthOfProgression = 11;

  const missingNumber = randomNumber(min1, lengthOfProgression - 1);

  const question = createProgression(number1, number2, lengthOfProgression);

  const rightAnswer = question[missingNumber];

  question[missingNumber] = ['..'];

  const result = [question.join(' '), String(rightAnswer)];
  return result;
};

const startProgressionGeneration = () => runGameEngine(calculateData, gameTask);

export default startProgressionGeneration;
