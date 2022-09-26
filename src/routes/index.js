const express = require('express')
const project_routes = express.Router();
const customer_routes = require("./customer.routes")
const newApi = (app)=>{
    /* http://localhost:5000/api/v1*/
    app.use('/api/v1',project_routes);
    /*http://localhost:5000/api/v1/customers */
    project_routes.use("/customers",customer_routes)
}

module.exports = newApi;