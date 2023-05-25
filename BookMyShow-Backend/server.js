/* in this file we are are creating the routes using the modules and sending the data to database the booking 
will be successfull if the data send to data dabe else it will show error. and we are also creating the route to get
recent data sended by the user on route  /booking  */

const express = require("express");
const app = express();
const { connection } = require("./db/connection");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const bookingRoute = require("./Routes/movieRoute")

app.use( bodyParser.urlencoded({ extended: false }) );// here we are getting urlencoded data with the help of middlewere
app.use( bodyParser.json() ); // here we using express middlewere to  parse JSON data
app.use( cors() );

// Connecting to database
connection();

// creating an api and seperating it.
app.get("/", async (req, res) => {
    res.send("hi i am home page")
})
app.use("/api", bookingRoute);

// listening backend on a port.
const port = process.env.PORT || 8081;
app.listen( port, () => console.log(`App listening on port ${port}!`) );

module.exports = app;
