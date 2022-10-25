import readlineSync from 'readline-sync';

export const exercise = console.log('Answer "yes" if the number is even, otherwise answer "no".');

export const solutionEven = (name, comparisonYesNo) => {

  let i = 0;
  do {
    const randonNumber = Math.floor(Math.random() * (100));

    console.log(`Question: ${randonNumber}`);

    const answer = readlineSync.question('Your answer: ');

    let example;
    parityCheck(randonNumber, example);

    comparisonYesNo(example, answer, i, name);
    if (example !== answer) {
      i += 3;
    }
    i += 1;
  } while (i < 3);
};

const parityCheck = (number, answer) {
  if (number % 2 === 0) {
    answer = 'yes';
  } else {
    answer = 'no';
  }
  return answer;
}