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

