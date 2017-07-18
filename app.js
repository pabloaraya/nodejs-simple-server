var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/product/:productId', function (req, res) {
  res.sendFile(__dirname + '/public/product.json');
});

app.get('/products', function (req, res) {
  res.sendFile(__dirname + '/public/products.json');
});

app.listen(8080, function () {
  console.log('Simple nodejs server running!');
});
