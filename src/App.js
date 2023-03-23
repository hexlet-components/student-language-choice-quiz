import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

import Question from './Question.js';

import questions from './data/questions.js';
import questionHandler, { getResult } from './questionHandler.js';
import descriptions from './data/languageDescription.js';

function FinishResult({result}) {
  const languages = result.map((name) => descriptions[name]);

  return (
    <>
      <div>{`Вам подойдут: ${languages.map(({name}) => name).join(', ')}`}</div>
      {languages.map(({description}) => <div>{description}</div>)}
    </>
  );
};

function App() {
  const [currentResults, setCurrentResults] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [processState, setProcessState] = useState('init');
  const [finishResult, setFinishResult] = useState({});

  const setAnswer = (userAnswer) => {
    const newCurrentQuestion = currentQuestion + 1;

    const result = questionHandler(questions[currentQuestion], userAnswer, currentResults);
    setCurrentResults(result);

    if (newCurrentQuestion >= questions.length) {
      setFinishResult(getResult(result));
      setProcessState('finish');
      return;
    }
    setCurrentQuestion(newCurrentQuestion);
  };

  const render = () => {
    switch (processState) {
      case 'init':
        return (
          <>
            <div className="mb-5">Оветьте на вопросы, чтобы определить какие языки программирования вам подходят</div>
            <Button onClick={() => setProcessState('started')}>Начать</Button>
          </>
        );
      case 'started':
        return (
          <Question question={questions[currentQuestion]} setAnswer={setAnswer} />
        );
      case 'finish':
        return (<FinishResult result={finishResult} />);
    }
  };

  return (
    <div className="App">
      {render()}
    </div>
  );
}

export default App;
