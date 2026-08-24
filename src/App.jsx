import { useState } from "react";
import { Button, Card, Container, MantineProvider, Stack, Text } from "@mantine/core";

import Question from "./Question.jsx";

import questions from "./data/questions.js";
import questionHandler, { getResult } from "./questionHandler.js";
import descriptions from "./data/languageDescription.js";

function FinishResult({ result }) {
  const languages = result.map((name) => descriptions[name]);

  const names = languages.map(({ name }) => name);
  const last = names.pop();
  const finishResult = names.length > 0 ? `${names.join(", ")} или ${last}` : last;

  return (
    <Stack gap="sm">
      <Text>{`Ваш выбор — ${finishResult}`}</Text>
      {languages.map(({ name, description }) => (
        <Text key={name}>{description}</Text>
      ))}
    </Stack>
  );
}

function App() {
  const [currentResults, setCurrentResults] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [processState, setProcessState] = useState("init");
  const [finishResult, setFinishResult] = useState({});

  const setAnswer = (userAnswer) => {
    const newCurrentQuestion = currentQuestion + 1;

    const result = questionHandler(questions[currentQuestion], userAnswer, currentResults);
    setCurrentResults(result);

    if (newCurrentQuestion >= questions.length) {
      setFinishResult(getResult(result));
      setProcessState("finish");
      return;
    }
    setCurrentQuestion(newCurrentQuestion);
  };

  const render = () => {
    switch (processState) {
      case "init":
        return (
          <Stack gap="lg" align="flex-start">
            <Text>
              Добро пожаловать в тестирование Хекслета, которое поможет определиться, какой язык
              программирования вам больше подойдет для старта карьеры в разработке
            </Text>
            <Button onClick={() => setProcessState("started")}>Начать</Button>
          </Stack>
        );
      case "started":
        return <Question question={questions[currentQuestion]} setAnswer={setAnswer} />;
      case "finish":
        return (
          <Stack gap="lg" align="flex-start">
            <FinishResult result={finishResult} />
            <Button
              onClick={() => {
                setCurrentResults({});
                setCurrentQuestion(0);
                setFinishResult({});
                setProcessState("started");
              }}
            >
              Заново
            </Button>
          </Stack>
        );
    }
  };

  return (
    <MantineProvider>
      <Container size="sm" py="xl">
        <Card shadow="sm" radius="md" padding="xl" withBorder>
          {render()}
        </Card>
      </Container>
    </MantineProvider>
  );
}

export default App;
