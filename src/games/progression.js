import gameEngine from '../index.js';
import randomNumber from '../rand.js';

const gameTask = 'What number is missing in the progression?';

const progress = (number1, number2, count) => {
  const sum = [];
  let num = number2;

  for (let i = 1; i < count; i += 1) {
    num += number1;
    sum.push(num);
  }
  return sum;
};

const min1 = 1;
const max1 = 100;

const min2 = 1;
const max2 = 25;

const min3 = 1;
const max3 = 10;

const data = () => {
  const number1 = randomNumber(min1, max1);
  const number2 = randomNumber(min2, max2);
  const missingNumber = randomNumber(min3, max3);

  const maxNumbersString = 11;

  const allNumbers = progress(number1, number2, maxNumbersString);

  const massivQuestion = [];
  let rightAnswer;
  for (let j = 1; j < 10; j += 1) {
    if (j !== missingNumber) {
      massivQuestion.push(allNumbers[j]);
    } else {
      rightAnswer = allNumbers[j];
      massivQuestion.push('..');
    }
  }
  const finalQuestion = massivQuestion.join(' ');
  const question = `${finalQuestion}`;

  const result = [question, String(rightAnswer)];
  return result;
};

const solutionProgression = () => gameEngine(data, gameTask);

export default solutionProgression;
