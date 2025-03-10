const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

const port = process.env.PORT || 3001;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


module.exports = app;

