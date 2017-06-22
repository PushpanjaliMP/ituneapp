var express = require("express")
var app = express();
var bodyParser = require("body-parser")
var path = require('path');
var fs = require("fs");
var config = require('../webpack.config.js');
var webpack = require('webpack');
var csv1 = require("fast-csv");
var csv = require('csvtojson');
var parse = require('csv-parser');
var fileUpload = require("express-fileupload");
const util = require('util');

//hot module reloading
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');

var compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: config.output.publicPath}));
app.use(webpackHotMiddleware(compiler));


app.use(express.static('../views'));

//for file uploading
app.use(fileUpload());


app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());
require("./routes")(app)


app.listen(3000,function() {
	console.log("Server running")
})
