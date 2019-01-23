package routes

import (
	"fmt"
	"html/template"
	"net/http"
	"os"

	"github.com/go-chi/chi"
)

var indexTemplate = template.Must(template.ParseFiles("templates/index.html"))

type indexStruct struct {
	Title string
}

// Index handles requests to the root route
func Index(r *chi.Mux) {
	r.Get("/", index)
}

func index(w http.ResponseWriter, r *http.Request) {
	wd, _ := os.Getwd()
	fmt.Printf("os.Getwd: %v\n", wd)

	w.WriteHeader(http.StatusOK)
	w.Header().Set("Content-Type", "text/html; charset=utf-8")

	data := indexStruct{
		Title: "Hello World!",
	}

	indexTemplate.Execute(w, data)
}
