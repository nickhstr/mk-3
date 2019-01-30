package favicon

import (
	"net/http"

	"github.com/go-chi/chi"
)

// Routes register handlers for favicon requests
func Routes(r *chi.Mux) {
	r.Get("/favicon.ico", favicon)
}

func favicon(w http.ResponseWriter, r *http.Request) {
	http.ServeFile(w, r, "dist/web/favicon.ico")
}
