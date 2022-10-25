import readlineSync from 'readline-sync';

const solutionCalc = (name, comparison) => {
  console.log('What is the result of the expression?');

  let i = 0;
  do {
    const randomNumber1 = Math.floor(Math.random() * (100));
    const randomNumber2 = Math.floor(Math.random() * (100));

    const randomOperator = Math.floor(Math.random() * (3 - 0) + 0);

    let example;

    if (randomOperator === 0) {
      console.log(`Question: ${randomNumber1} + ${randomNumber2}`);
      example = randomNumber1 + randomNumber2;
    } else if (randomOperator === 1) {
      console.log(`Question: ${randomNumber1} - ${randomNumber2}`);
      example = randomNumber1 - randomNumber2;
    } else {
      console.log(`Question: ${randomNumber1} * ${randomNumber2}`);
      example = randomNumber1 * randomNumber2;
    }

    const answer = Number(readlineSync.question('Your answer: '));

    comparison(example, answer, i, name);
    if (example !== answer) {
      i += 3;
    }
    i += 1;
  } while (i < 3);
};

export default solutionCalc;
