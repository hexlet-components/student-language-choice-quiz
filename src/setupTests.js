// Матчеры вида toBeInTheDocument. Раньше файл подключался автоматически по
// соглашению Create React App, теперь он указан в vite.config.js.
import "@testing-library/jest-dom";

// MantineProvider на монтировании читает системную тему через matchMedia, а
// jsdom этот метод не реализует: без заглушки любой тест с рендером падает
// «window.matchMedia is not a function», и выглядит это как поломка компонента.
// Заглушка из документации Mantine, урезанная до нужного здесь минимума.
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: (query) => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  }),
});
