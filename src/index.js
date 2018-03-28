import readlineSync from 'readline-sync';

const greeting = () => console.log('Welcome to the Brain Games!');

export default (description, args, attempts) => {
  greeting();
  const user = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${user}`);
  console.log(description);

  const iter = (acc) => {
    const [question, correctAnswer] = args();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer? ');
    if (userAnswer !== correctAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}. Let's try again, ${user}`);
      return;
    }
    console.log('correct');
    if (acc === attempts) {
      console.log(`Congratulations, ${user}!`);
      return;
    }
    iter(acc + 1);
  };
  return iter(1);
};
