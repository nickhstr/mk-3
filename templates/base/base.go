package base

import (
	"html/template"
)

type Data struct {
	Title    string
	Main     template.HTML
	Metatags []template.HTML
	Linktags []template.HTML
}
