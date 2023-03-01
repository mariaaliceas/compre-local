const express = require('express');
const app = express();
app.use(express.json());

const database = require('./config/database.js');
app.database = database;

const consign = require('consign');
consign()
    .then('./api')
    .then('./routes/routes.js')
    .into(app)



app.listen(3002);