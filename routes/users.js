var express = require('express');
var router = express.Router();

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

router.get('/download', function(req, res) {
	client.connect(function() {
		client.download('ftp/files/', 'download/', {
			overwrite: 'all'
		}, function(result) {
			console.log(result);
			var Converter = require('csvtojson').Converter;
			var converter = new Converter({});
			var jsondata = converter.fromFile("download/Webapp.csv", function(err, result) {
				if(err) {
					console.log("An Error Has Occured");
					console.log(err);
				}
				var json = result;

				console.log(json);
				res(json);
			});
		});
	});
});
router.get('/upload', function(reg, res) {
	client.connect(function() {
		client.upload(['download/**'], 'ftp/files/', {
			baseDir: 'files',
			overwrite: 'all'
		}, function (result) {
			console.log(result);
		});
	});
});
module.exports = router;
