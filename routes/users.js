var express = require('express');
var router = express.Router();
var fs = require('fs');
const json2csv = require('json2csv').parse;

var ftpClient = require('./lib/client.js'),
	config = {
        host: 'localhost',
        port: 21,
        user: 'sammy',
        password: 'sammy'
    },
    options = {
        logging: 'basic'
    },
    client = new ftpClient(config, options);
var webappdata=[];

router.get('/download', function(req, res) {
	var Converter = require('csvtojson').Converter;
	var converter = new Converter({});
	var jsondata = converter.fromFile("download/Webapp.csv", function(err, result) {
		if(err) {
			console.log("An Error Has Occured");
			console.log(err);
		}
		var json = result;
		webappdata = result;
		console.log(json);
		res.json(json);
	});
});
router.get('/getpickcode', function(req, res) {
	var Converter = require('csvtojson').Converter;
	var converter = new Converter({});
	var jsondata = converter.fromFile("download/pickzone.csv", function(err, result) {
		if(err) {
			console.log("An Error Has Occured");
			console.log(err);
		}
		var json = result;

		console.log(json);
		res.json(json);
	});
});
router.post('/upload', function(req, res) {	
	console.log(webappdata);
	console.log(req.body);
	var changeList = req.body;
	for (var i = changeList.length - 1; i >= 0; i--) {
		webappdata[changeList[i]['id']]['Pick Zone'] = changeList[i]['data'];
		console.log(webappdata[changeList[i]['id']]);
	}
	const csv = json2csv(webappdata);
	console.log(csv);
	fs.writeFile('download/Webapp.csv', csv, function(err) {
		if (err) throw err;
		console.log('file saved');
	});
});
module.exports = router;
