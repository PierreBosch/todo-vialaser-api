require("dotenv").config({
    path: process.env.NODE_ENV === "test" ? ".env.test" : ".env"
});

const express = require('express');
const cors = require("cors");
const routes = require('./routes');

require('./database');

const app = express();

app.use(cors());
app.use(express.json());
app.use(`/api/v${process.env.API_VERSION}`,routes);

app.listen(process.env.PORT || 8080);