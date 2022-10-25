import readlineSync from 'readline-sync';

const solutionGcd = (name, comparison) => {
  console.log('Find the greatest common divisor of given numbers.');

  let i = 0;
  do {
    let randomNumber1 = Math.floor(Math.random() * (100) + 1);
    let randomNumber2 = Math.floor((Math.random() * (100)) / 5 + 2);

    console.log(`Question: ${randomNumber1} ${randomNumber2}`);

    const answer = Number(readlineSync.question('Your answer: '));

    while (randomNumber1 !== randomNumber2) {
      if (randomNumber1 > randomNumber2) {
        randomNumber1 -= randomNumber2;
      } else {
        randomNumber2 -= randomNumber1;
      }
    }
    const example = randomNumber1;

    comparison(example, answer, i, name);

    if (example !== answer) {
      i += 3;
    }
    i += 1;
  } while (i < 3);
};

export default solutionGcd;
