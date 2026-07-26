import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the quiz welcome message', () => {
  render(<App />);
  expect(screen.getByText(/Добро пожаловать в тестирование Хекслета/i)).toBeInTheDocument();
});
