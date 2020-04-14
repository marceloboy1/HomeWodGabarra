const express = require('express');
const cors = require('cors');
const {errors} = require('celebrate')
const routes = require('./routes');
const morgan = require('morgan');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(routes);
app.use(errors());
app.use(morgan('dev'));

module.exports = app;