PROJECTNAME=$(shell basename "$(PWD)")

# First target, is the default command run if 'make' is invoked without any targets
all: help

## build-server: Uses 'go build' to create the server executable, found in the 'dist' directory
.PHONY: build
build-server:
	@echo "🛠️  Building executable..."
	@go build -o dist/server/$(PROJECTNAME) main.go
	@echo "👍 Done."

## clean: Removes build artifacts
.PHONY: clean
clean:
	@echo "🔥 Removing build artifacts..."
	@rm -rf dist
	@echo "✨ Done."

## coverage: Runs tests and reports coverage
.PHONY: coverage
coverage: create-coverage
	@echo "=============================== Coverage Summary ==============================="
	@go tool cover -func=coverage.out
	@echo "================================================================================"

## coverage-html: Runs tests and opens a browser window to visualize test coverage
.PHONY: coverage-html
coverage-html: create-coverage
	@echo "🛠  Opening coverage report in browser..."
	@go tool cover -html=coverage.out
	@echo "👍 Done."

## create-coverage: Outputs test coverage to 'coverage.out'
.PHONY: create-coverage
create-coverage:
	@echo "🏃 Running tests and creating coverage report..."
	@GO_ENV=test go test -race -coverprofile=coverage.out ./...
	@echo "👍 Done."

## dev: Starts the app in dev mode
.PHONY: dev
dev:
	@echo "🚀 Starting dev script..."
	@./scripts/dev.sh

## dev-go: Starts the server in dev mode
.PHONY: dev-go
dev-go:
	@echo "🚀 Starting dev server..."
	@modd --file=./modd.conf

## install: Downloads all app dependencies
.PHONY: install
install:
	@echo "🛠  Installing package dependencies..."
	@yarn install
	@go mod download
	@go install github.com/cortesi/modd/cmd/modd
	@echo "👍 Done."

## serve: Builds and runs the server in production mode
.PHONY: serve
serve: build
	@echo "🚀 Starting server..."
	GO_ENV=production ./dist/server/$(PROJECTNAME)

## test: Runs all tests
.PHONY: test
test:
	@echo "🏃 Running all Go tests..."
	GO_ENV=test go test -race ./...
	@echo "👍 Done."

## help: List available commands
.PHONY: help
help: Makefile
	@echo
	@echo " Choose a command to run in "$(PROJECTNAME)":"
	@echo
	@sed -n 's/^##//p' $< | column -t -s ':' |  sed -e 's/^/ /'
	@echo
