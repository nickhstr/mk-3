package index

import (
	"bytes"
	"html/template"
	"io"
	"net/http"

	"github.com/go-chi/chi"
	"github.com/nickhstr/mk-3/templates/base"
	"github.com/nickhstr/mk-3/templates/home"
)

var tpl *template.Template

func init() {
	tpl = template.Must(
		template.ParseFiles(
			"templates/base/base.gohtml",
			"templates/home/home.gohtml",
		),
	)
}

// Routes registers handlers for the index route
func Routes(r *chi.Mux) {
	r.Get("/", index)
}

func index(w http.ResponseWriter, r *http.Request) {
	w.WriteHeader(http.StatusOK)
	w.Header().Set("Content-Type", "text/html; charset=utf-8")

	home := homeHTML(home.Data{
		PrimaryHeading: "Hello World!",
	})

	renderHomePage(w, tpl, base.Data{
		Title: "The Page's Title",
		Main:  template.HTML(home),
	})
}

func homeHTML(data home.Data) []byte {
	var homeBuff bytes.Buffer
	tpl.ExecuteTemplate(&homeBuff, "home", data)

	return homeBuff.Bytes()
}

func renderHomePage(w io.Writer, tpl *template.Template, data base.Data) {
	tpl.ExecuteTemplate(w, "base", data)
}
