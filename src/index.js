import readlineSync from 'readline-sync';

export const welcome = console.log('Welcome to the Brain Games!');

export const name = readlineSync.question('May I have your name? ');

export const hello = console.log(`Hello, ${name}!`);

export const divisionWithoutRemainder = (number, result) => {
    for (let j = 0; j < number; j += 1) {
        if (number % j === 0) {
        result.push(j);
        }
    }
    return result;
}