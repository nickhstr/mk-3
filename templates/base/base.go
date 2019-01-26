package base

import (
	"html/template"
)

type Data struct {
	Title        string
	Description  string
	URL          string
	App          template.HTML
	ClientScript string
}
