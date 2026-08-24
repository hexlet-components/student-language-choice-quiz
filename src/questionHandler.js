export const getResult = (result) => {
  const parsedResults = Object.entries(result);
  const max = Math.max(...parsedResults.map(([, value]) => value));

  return parsedResults.filter(([, value]) => value >= max).map(([name]) => name);
};

export default (question, answer, results) => {
  const result = question.answers[answer];
  const res = Object.entries(result.results).reduce(
    (acc, [language, count]) => {
      const value = parseFloat(count, 10);
      if (!acc[language]) {
        acc[language] = 0;
      }
      acc[language] += value;
      return acc;
    },
    { ...results },
  );

  return res;
};
