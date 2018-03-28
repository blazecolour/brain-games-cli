import gamePlay from '..';
import getRandom from '../lib/rand';

export default () => {
  const description = 'Answer "yes" if number even otherwise answer "no"';
  const isNumEven = num => (num % 2 === 0 ? 'yes' : 'no');
  const attempts = 3;

  const args = () => {
    const num = getRandom(100);
    const question = String(num);
    const correctAnswer = String(isNumEven(num));
    return [question, correctAnswer];
  };

  return gamePlay(description, args, attempts);
};
