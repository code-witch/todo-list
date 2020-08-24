const express = require('express');
const routes = require('./routes/routes');
const path = require('path');
const bodyParser = require('body-parser');
require('dotenv').config()

const port = process.env.PORT;
const hostname = process.env.HOSTNAME;

const urlEncodedParser = bodyParser.urlencoded({
    extended: true
});

const app = express();

app.set('view engine', 'pug');
app.set('views',path.join( __dirname + '/views'));
app.use(express.static(path.join(__dirname, '/public')));

app.get('/', routes.index);
app.post('/update/:id', urlEncodedParser, routes.update);

app.listen(port, hostname, () =>{
    console.log(`todo-list running at http://${hostname}:${port}`);
});