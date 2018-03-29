import gamePlay from '..';
import getRandom from '../lib/rand';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  const iter = acc => (num % acc === 0 ? acc : iter(acc + 1));
  const div = iter(2);
  return div === num;
};

export default () => {
  const description = 'Is this number prime?';

  const args = () => {
    const num = getRandom(100);
    const question = String(num);
    const correctAnswer = isPrime(num) ? 'yes' : 'no';
    return [question, correctAnswer];
  };

  return gamePlay(description, args);
};
