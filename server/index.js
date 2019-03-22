const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const router = require('./router.js')
const path = require('path');
const port = 3000;

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', router);

app.use(express.static(path.join(__dirname, '../client/dist')));

app.listen(port, () => console.log(`--- Connected to server, listening on port ${port} ---`))
