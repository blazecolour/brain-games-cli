import gamePlay from '..';
import getRandom from '../lib/rand';

export default () => {
  const description = 'Find the greatest common divisor of given numbers.';
  const getGcd = (a, b) => (b === 0 ? a : getGcd(b, a % b));

  const args = () => {
    const x = getRandom(100);
    const y = getRandom(100);
    const question = `${x} ${y}`;
    const correctAnswer = String(getGcd(x, y));
    return [question, correctAnswer];
  };

  return gamePlay(description, args);
};
