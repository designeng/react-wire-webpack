var express = require('express');
var app = express();
var server = require('http').Server(app);

var port = process.env.PORT || 8080;
app.set('port', port);

// static pages
app.use(express.static('./public'));

/* 404 */
app.use(function(req, res, next) {
    var err = new Error('Url is not found! ::: ' + req.url);
    err.status = 404;
    next(err);
});

server.listen(port, err => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('navigate to http://localhost:' + port);
});

module.exports = app;