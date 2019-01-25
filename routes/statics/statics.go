package statics

import (
	"net/http"

	"github.com/go-chi/chi"
)

// Routes register handlers for the statics route
func Routes(r *chi.Mux) {
	const assetsPath = "/assets/"
	const assetsDir = "dist/web"

	staticsDir := http.Dir(assetsDir)
	staticsHandlerFunc := http.StripPrefix(assetsPath, http.FileServer(staticsDir)).ServeHTTP

	r.Get(assetsPath+"*", staticsHandlerFunc)
}
