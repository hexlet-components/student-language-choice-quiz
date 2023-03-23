import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function Question({ question, setAnswer }) {
  const [userAnswer, setUserAnswer] = useState(null);
  return (
    <Form>
      <Form.Label className="mb-4">{question.question}</Form.Label>
      {question.answers.map((answer, index) => (
        <div key="default-radio" className="mb-3">
          <Form.Check 
            type="radio"
            id={answer.answer}
            label={answer.answer}
            value={index}
            checked={userAnswer === index}
            onChange={(e) => {
              setUserAnswer(parseInt(e.currentTarget.value, 10));
            }}
          />
        </div>
      ))}
      <Button onClick={() => {
        setAnswer(userAnswer);
        setUserAnswer(null);
      }}>Далее</Button>
    </Form>
  );
}

export default Question;