install:
	pnpm install

lint:
	pnpm --silent run lint
	pnpm --silent run format:check

test:
	pnpm --silent test

build:
	pnpm --silent run build
