const express = require('express');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const avenuesRouter = require('./Routes/AvenuesRoutes')

app.use('/api/v1/avenues', avenuesRouter)

module.exports = app;

