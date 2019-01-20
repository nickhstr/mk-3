package main

import (
	"github.com/nickhstr/goweb/env"
	_ "github.com/nickhstr/goweb/logger"
	"github.com/nickhstr/goweb/middleware"
	"github.com/nickhstr/goweb/server" // nolint: gotype
)

func main() {
	mux := middleware.Create(middleware.Config{
		AppName:     env.AppName(),
		AppVersion:  env.Get("APP_VERSION"),
		GitRevision: env.Get("GIT_COMMIT"),
		Region:      env.Get("REGION"),
	})

	server.Start(mux)
}
