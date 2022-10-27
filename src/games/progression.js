import runGameEngine from '../index.js';
import randomNumber from '../rand.js';

const gameTask = 'What number is missing in the progression?';

const minLengthProgresion = 0;
const lengthOfProgression = 10;

const minNumber = 1;

const maxNumber = 25;
const maxNumberRand = 50;

const createProgression = (number1, number2, length) => {
  const array = [];

  for (let i = 0; i < length; i += 1) {
    array.push(number1 + number2 * i);
  }
  return array;
};

const getData = () => {
  const number1 = randomNumber(minNumber, maxNumberRand);
  const number2 = randomNumber(minNumber, maxNumber);

  const missingNumber = randomNumber(minLengthProgresion, lengthOfProgression);

  const progression = createProgression(number1, number2, lengthOfProgression);

  const rightAnswer = progression[missingNumber];

  progression[missingNumber] = ['..'];

  return [progression.join(' '), String(rightAnswer)];
};

const startProgressionGeneration = () => runGameEngine(getData, gameTask);

export default startProgressionGeneration;
