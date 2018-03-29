import gamePlay from '..';
import getRandom from '../lib/rand';

const generateProgression = (start, end, step) => {
  const iter = arr => (arr.length === end ? arr : iter([...arr, arr.slice(-1)[0] + step]));
  return iter(start);
};

const hidenElement = (arr, target) =>
  (arr.reduce((acc, current, index) =>
    (index !== target ? acc.concat(current) : acc.concat('..')), []).join(' '));

export default () => {
  const description = 'What number is missing in this progression?';

  const args = () => {
    const start = [getRandom(100)];
    const step = getRandom(10);
    const end = 10;
    const target = getRandom(9);
    const progression = generateProgression(start, end, step);
    const question = hidenElement(progression, target);
    const correctAnswer = String(progression[target]);
    return [question, correctAnswer];
  };

  return gamePlay(description, args);
};
