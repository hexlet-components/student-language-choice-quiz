import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

// Раньше здесь лежала заготовка Create React App: тест искал ссылку
// «learn react», которой в этом приложении нет, и падал. Теперь проверяется то,
// что квиз действительно делает: стартовый экран и переход к первому вопросу.

test("показывает приглашение и кнопку старта", () => {
  render(<App />);

  expect(screen.getByText(/Добро пожаловать в тестирование Хекслета/i)).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "Начать" })).toBeInTheDocument();
});

test("по кнопке «Начать» показывает первый вопрос", async () => {
  render(<App />);

  await userEvent.click(screen.getByRole("button", { name: "Начать" }));

  expect(screen.queryByRole("button", { name: "Начать" })).not.toBeInTheDocument();
  expect(screen.getByRole("button", { name: "Далее" })).toBeInTheDocument();
});
