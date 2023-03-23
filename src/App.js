import { useState } from 'react';
import { Card, Button } from 'react-bootstrap';

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
            <div className="mb-4">Оветьте на вопросы, чтобы определить какие языки программирования вам подходят</div>
            <div><Button onClick={() => setProcessState('started')}>Начать</Button></div>
          </>
        );
      case 'started':
        return (
          <Question question={questions[currentQuestion]} setAnswer={setAnswer} />
        );
      case 'finish':
        return (
          <>
            <FinishResult result={finishResult} />
            <Button className="mt-4" onClick={() => {
              setCurrentResults({});
              setCurrentQuestion(0);
              setFinishResult({});
              setProcessState('started');
            }}>Заново</Button>
          </>
        );
    }
  };

  return (
    <div className="container-fluid h-100">
      <div className="row justify-content-center align-content-center h-100">
        <div className="col-12 col-md-8 col-xxl-6">
          <div className="card shadow-sm">
            <div className="card-body flex-column flex-md-row justify-content-around align-items-center p-5">
              {render()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
