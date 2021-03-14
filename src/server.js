require("dotenv").config({
    path: process.env.NODE_ENV === "test" ? ".env.test" : ".env"
});
  
const express = require("express");
const cors = require("cors");
const routes = require("./routes");
  
class App {

    constructor() {
        this.express = express();
        this.isDev = process.env.NODE_ENV !== "production";

        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.express.use(express.json());
    }

    routes() {
        this.express.use(cors());
        this.express.use(`/api/v${process.env.API_VERSION}`, routes);
    }

}

module.exports = new App().express;