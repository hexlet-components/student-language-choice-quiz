import { useState } from "react";
import { Button, Radio, Stack } from "@mantine/core";

function Question({ question, setAnswer }) {
  const [userAnswer, setUserAnswer] = useState(null);

  return (
    <Radio.Group label={question.question} value={userAnswer} onChange={setUserAnswer}>
      <Stack mt="md" gap="sm">
        {question.answers.map((answer, index) => (
          <Radio key={answer.answer} value={String(index)} label={answer.answer} />
        ))}
      </Stack>
      <Button
        mt="lg"
        disabled={userAnswer === null}
        onClick={() => {
          setAnswer(Number(userAnswer));
          setUserAnswer(null);
        }}
      >
        Далее
      </Button>
    </Radio.Group>
  );
}

export default Question;
