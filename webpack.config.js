// path
var path = require("path");

// dist dir
var DIST_DIR = path.resolve(__dirname, "dist");

// src dir
var SRC_DIR = path.resolve(__dirname, "src");

// config
var config = {
	// only when webpack server, then web can use dev tools in chrome console
	devtool: "#eval-source-map",

	// entry
	// src dir
	// app/index.js
	entry: SRC_DIR + "/app/index.js",
  output: {
		// all output here, /app in MEM
  	path: DIST_DIR + "/app",
		// in MEM as well
    filename: "bundle.js",
		// you know like your .js .css files to be included. 
    publicPath: "/app/"
  },

	// module
  module: {
		// loaders
 		loaders: [
    {
			// test all js
    	test: /\.js?/,
			// include
      include: SRC_DIR,
			// babel loader
      loader: "babel-loader",
      // query
			query: {
				// preset
				// react
				// es 2015
				// stage 2
      	presets: ["react", "es2015", "stage-2"]
      }
    }]
  }

};

module.exports = config;
