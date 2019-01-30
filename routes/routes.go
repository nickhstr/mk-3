package routes

import (
	"github.com/go-chi/chi"
	"github.com/go-chi/chi/middleware" // nolint: gotype
	"github.com/nickhstr/mk-3/routes/index"
	"github.com/nickhstr/mk-3/routes/statics"
	"github.com/nickhstr/mk-3/routes/favicon"
)

// Router provides a chi router for registration of routes.
var Router *chi.Mux

// Routes holds all routes to be registered to Router.
var Routes = []func(*chi.Mux){
	index.Routes,
	statics.Routes,
	favicon.Routes,
}

func init() {
	Router = chi.NewRouter()
	Router.Use(middleware.StripSlashes)
	registerRoutes(Router)
}

func registerRoutes(r *chi.Mux) {
	for _, route := range Routes {
		route(r)
	}
}
