const path = require("path")

module.exports = { 
  entry: "./src/index.js",   // entry point 
  output: { 
    path: path.join(__dirname, "/dist"),  // bundle output path 
    filename: "index_bundle.js"           // bundle name 
  } 
}