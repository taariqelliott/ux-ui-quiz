export const shuffleAnswers = (question) => {
  const unsuffledAnswers = [
    question.correctAnswer,
    ...question.incorrectAnswers,
  ];
  return unsuffledAnswers
    .map((answer) => ({ sort: Math.random(), value: answer }))
    .sort((a, b) => a.sort - b.sort)
    .map((obj) => obj.value);
};
