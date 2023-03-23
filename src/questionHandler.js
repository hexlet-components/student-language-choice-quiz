import _ from 'lodash';

export const getResult = (result) => {
  const parsedResults = Object.entries(result);
  const max = _.maxBy(parsedResults, ([, value]) => value);
  const res = parsedResults.filter((language) => language[1] >= max[1]).map(([name]) => name);

  return res;
};

export default (question, answer, results) => {
  const result = question.answers[answer]; 
  const res = Object.entries(result.results).reduce((acc, [language, count]) => {
    const value = parseFloat(count, 10);
    if (!acc[language]) {
      acc[language] = 0;
    }
    acc[language] += value;
    return acc;
  }, { ...results});

  return res;
};