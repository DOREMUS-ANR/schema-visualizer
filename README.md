# Schema.org Visualizer
A visualizer for Schema.org.

A limited number of types is currently implemented (see [list](FEATURE_IMPLEMENTED.md)).

**DEMO** https://doremus-anr.github.io/schema-visualizer/

## Installation

    npm install

Get a key for Google Maps Web APIs following the [instructions](https://developers.google.com/maps/documentation/javascript/).

Register to [mLab](http://docs.mlab.com/), enable and generate an [API key](http://docs.mlab.com/data-api/).

Set up the `src/app/index.config.js`:

    googleKey: '...', // key for Google Maps
    mlabKey: '...', // key for mLab
    mlabDbName: '...' // database name on mLab

## Run

    gulp serve

in production mode

    gulp build
    gulp serve:dist
