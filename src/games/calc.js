import gamePlay from '..';
import getRandom from '../lib/rand';

const calc = (str) => {
  const methods = {
    '-': (a, b) => a - b,
    '+': (a, b) => a + b,
    '*': (a, b) => a * b,
  };

  const split = str.split(' ');
  const a = Number(split[0]);
  const operand = split[1];
  const b = Number(split[2]);

  return methods[operand](a, b);
};

export default () => {
  const description = 'What is the result of the expressions?';

  const args = () => {
    const x = getRandom(100);
    const y = getRandom(100);
    const operators = ['+', '-', '*'];
    const randOperator = operators[getRandom(2)];
    const expressions = `${x} ${randOperator} ${y}`;
    const question = expressions;
    const correctAnswer = String(calc(expressions));
    return [question, correctAnswer];
  };

  return gamePlay(description, args);
};
