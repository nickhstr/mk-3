package cmd

import (
	"github.com/nickhstr/goweb/env"
	_ "github.com/nickhstr/goweb/logger" // nolint: golint
	"github.com/nickhstr/goweb/middleware"
	"github.com/nickhstr/goweb/server" // nolint: gotype
	"github.com/nickhstr/mk-3/routes" // nolint: gotype
)

// Serve starts the app server.
func Serve() {
	mux := middleware.Create(middleware.Config{
		AppName:     env.AppName(),
		AppVersion:  env.Get("APP_VERSION"),
		GitRevision: env.Get("GIT_COMMIT"),
		Region:      env.Get("REGION"),
		Handler: routes.Router,
	})

	server.Start(mux)
}
