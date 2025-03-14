const express = require('express');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const avenuesRouter = require('./Routes/AvenuesRoutes')
const adminRouter = require('./Routes/AdminRoutes')
const dashboardRouter = require('./Routes/AdminDashboardDemo')


app.use('/api/v1/avenues', avenuesRouter)
app.use('/api/v1/admin', adminRouter)
app.use('/api/v1', dashboardRouter)

module.exports = app;

