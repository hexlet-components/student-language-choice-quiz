import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

import questions from './data/questions.js';
import descriptions from './data/languageDescription.js';

test('проходит квиз до конца и показывает результат', async () => {
  const user = userEvent.setup();
  render(<App />);

  await user.click(screen.getByRole('button', { name: 'Начать' }));

  for (const question of questions) {
    expect(screen.getByText(question.question)).toBeInTheDocument();
    await user.click(screen.getAllByRole('radio')[0]);
    await user.click(screen.getByRole('button', { name: 'Далее' }));
  }

  const languageNames = Object.values(descriptions).map(({ name }) => name);
  const resultText = screen.getByText(/Ваш выбор/);
  expect(resultText).toBeInTheDocument();
  expect(languageNames.some((name) => resultText.textContent.includes(name))).toBe(true);
});
