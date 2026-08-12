# Choose Programming Language

Квиз, который помогает выбрать язык программирования для старта.

Онлайн: <https://hexlet-students-questioning.onrender.com/>

## Зачем это нужно

Небольшое приложение с понятной механикой: несколько вопросов, по ответам
складывается результат, результат показывается с описанием подходящих языков.

Логика подсчёта вынесена в `src/questionHandler.js` отдельно от отображения,
поэтому её можно читать и тестировать без React. Вопросы и описания языков
лежат данными в `src/data/`, то есть меняются без правки кода.

## Запуск

```bash
make install
make build      # сборка в dist/
make test
make lint

pnpm run dev      # дев-сервер
pnpm run preview  # отдать собранное
```

## Стек

[Vite](https://vite.dev/) и [Vitest](https://vitest.dev/). Раньше проект был на
Create React App: тот прекратил развитие, и `react-scripts` перестал ставиться
на актуальных версиях Node.

---

[![Hexlet Ltd. logo](https://raw.githubusercontent.com/Hexlet/assets/master/images/hexlet_logo128.png)](https://hexlet.io/?utm_source=github&utm_medium=link&utm_campaign=student-language-choice-quiz)

This repository is created and maintained by the team and the community of Hexlet, an educational project. [Read more about Hexlet](https://hexlet.io/?utm_source=github&utm_medium=link&utm_campaign=student-language-choice-quiz).

See most active contributors on [hexlet-friends](https://friends.hexlet.io/).
