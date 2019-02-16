var path = require('path');
var express = require('express');

var app = express();

app.set('views', path.resolve(__dirname, 'views'));

app.get('/',function(req,res) {
    res.sendFile(path.join(__dirname+'/views/index.html'));
});

app.use(express.static(path.resolve(__dirname, '/public')));
app.use(express.static(__dirname + '/public'));

app.listen(process.env.PORT || 1339);
