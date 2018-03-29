import gamePlay from '..';
import getRandom from '../lib/rand';

const isBalance = arr => Math.max(...arr) - Math.min(...arr) <= 1;

const alignment = (arr) => {
  const newArr = [...arr];
  newArr[0] = arr[0] + 1;
  newArr[newArr.length - 1] = arr[arr.length - 1] - 1;
  return newArr.sort((a, b) => a - b);
};

const balance = (arr) => {
  const aligned = alignment(arr);
  return isBalance(arr) ? arr : balance(aligned);
};

const numToArr = n =>
  String(n)
    .split('')
    .map(x => Number(x));

export default () => {
  const description = 'Balance the given number.';

  const args = () => {
    const num = getRandom(10000);
    const question = String(num);
    const correctAnswer = balance(numToArr(num)).join('');
    return [question, correctAnswer];
  };

  return gamePlay(description, args);
};
