package webpack

import (
	"encoding/json"
	"io/ioutil"
	"os"
	"path/filepath"

	"github.com/nickhstr/goweb/env"
	"github.com/rs/zerolog/log"
)

// AssetsMap provides a data structure to hold the webpack assets file data.
type AssetsMap struct {
	Main map[string]string `json:"main"`
}

// Assets returns the mapping of the webpack assets json file.
func Assets() (AssetsMap, error) {
	var (
		assets     AssetsMap
		assetsFile = env.Get("WEBPACK_ASSETS", "webpack-assets.json")
		err        error
	)

	wd, err := os.Getwd()
	if err != nil {
		log.Error().
			Err(err).
			Msg("Failed to get working directory")

		return assets, err
	}
	assetsJSON, err := ioutil.ReadFile(filepath.Join(wd, assetsFile))
	if err != nil {
		log.Error().
			Err(err).
			Msg("Failed to read webpack assets json file")

		return assets, err
	}

	if err = json.Unmarshal(assetsJSON, &assets); err != nil {
		log.Error().
			Err(err).
			Msg("Failed to unmarshal webpack assets json")

		return assets, err
	}

	return assets, nil
}
