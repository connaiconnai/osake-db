up:
	docker compose run --rm app sh -c 'npm install'
	docker compose up
build:
	docker compose build

init:
	@make build
	@make up

create-project:
	@make build
	mkdir -p app
	docker compose run --rm app sh -c 'npm create vite@latest . -- --template react-ts'

install-tailwind:
	docker compose run --rm app sh -c 'npm install -D tailwindcss postcss autoprefixer'
	docker compose run --rm app sh -c 'npx tailwindcss init -p'

install-eslint:
	docker compose run --rm app sh -c 'npm init @eslint/config'

install-prettier:
	docker compose run --rm app sh -c 'npm install --save-dev prettier eslint-config-prettier'

install-npm-pack:
	docker compose run --rm app sh -c 'npm install react-router-dom localforage match-sorter sort-by'
	docker compose run --rm app sh -c 'npm install -D vite-tsconfig-paths'

install-vitest:
	docker compose run --rm app sh -c 'npm install -D vitest'
	docker compose run --rm app sh -c 'npm install -D happy-dom'
	docker compose run --rm app sh -c 'npm install -D @testing-library/react @testing-library/user-event'

install-storybook:
	docker compose run --rm app sh -c 'npx storybook@latest init'

npm-install:
	docker compose run --rm app sh -c 'npm install'

app:
	docker compose run --rm app sh

npm-test:
	docker compose run --rm app sh -c 'npm run test'
npm-storybook:
	docker compose run --rm app sh -c 'npm run storybook'
