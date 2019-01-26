package index

import (
	"bytes"
	"html/template"
	"net/http"

	"github.com/go-chi/chi"
	"github.com/nickhstr/mk-3/templates/base"
	"github.com/nickhstr/mk-3/tools/webpack"
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
	home := homeHTML()
	wa, err := webpack.Assets()
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte("Internal Server Error"))
	} else {
		renderHomePage(w, tpl, base.Data{
			Title:        "Nick Hester - Personal Site",
			Description:  "Nick Hester's personal site and home on the internet.",
			URL:          "https://nickhstr.com",
			App:          template.HTML(home),
			ClientScript: wa.Main["js"],
		})
	}
}

func homeHTML() []byte {
	var homeBuff bytes.Buffer
	tpl.ExecuteTemplate(&homeBuff, "home", nil)

	return homeBuff.Bytes()
}

func renderHomePage(w http.ResponseWriter, tpl *template.Template, data base.Data) {
	w.WriteHeader(http.StatusOK)
	w.Header().Set("Content-Type", "text/html; charset=utf-8")
	tpl.ExecuteTemplate(w, "base", data)
}
