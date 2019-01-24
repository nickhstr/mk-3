package routes

import (
	"html/template"
	"net/http"

	"github.com/go-chi/chi"
)

var indexTemplate *template.Template

type indexStruct struct {
	Title string
}

func init() {
	indexTemplate = template.Must(template.ParseFiles("templates/index.gohtml"))
}

// Index handles requests to the root route
func Index(r *chi.Mux) {
	r.Get("/", index)
}

func index(w http.ResponseWriter, r *http.Request) {
	w.WriteHeader(http.StatusOK)
	w.Header().Set("Content-Type", "text/html; charset=utf-8")

	data := indexStruct{
		Title: "Hello World!",
	}

	indexTemplate.Execute(w, data)
}
