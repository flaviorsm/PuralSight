    var express = require('express');
    var bodyParser = require('body-parse');
    var port = '3000';

    var app = express();

    app.listen(port);

    app.get('/', function(req, resp){
        res.json({nome: 'Flavio'});
    });