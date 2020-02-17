// var http = require('http');
const express = require('express');

const app = express();
const bodyParser = require('body-parser');

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Methods', 'POST, PUT, OPTIONS, DELETE, GET');
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Credentials', true);
  next();
});

const urlencodedParser = bodyParser.urlencoded({ extended: false });

const mapResponse = {
  usersTotal: 1230,
  data: [{
    id: 'BS',
    name: 'Bahamas',
    value: 50,
  },
  {
    id: 'AL',
    label: 'Albania',
    value: 10,
  },
  {
    id: 'CA',
    name: 'Canada',
    value: 1020,
  },
  {
    id: 'US',
    name: 'United States',
    value: 100,
  },
  {
    id: 'FR',
    name: 'France',
    value: 50,
  }],
};

app.get('/users', (req, res) => {
  res.send(mapResponse);
});

app.post('/update', urlencodedParser, (req, res) => {
  if (!req.body) return response.sendStatus(400);
  res.send(mapResponse);
});


app.listen('3000', () => {
  console.log('running on 3000...');
});
