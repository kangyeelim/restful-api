const serverless = require('serverless-http');

let express = require('express');

let cors = require('cors');

let app = express();

let bodyParser = require('body-parser');

let mongoose = require('mongoose');

require('dotenv').config();

app.use(cors());

var MONGO_URL = process.env.URL;

if (process.env.NODE_ENV === 'production') {
  MONGO_URL = process.env.ATLAS_URL;
}

app.use(bodyParser.urlencoded({
   extended: true
}));

app.use(bodyParser.json());

var port = process.env.PORT || 8080;

mongoose.connect(MONGO_URL, { useNewUrlParser: true});

var db = mongoose.connection;

if(!db)
    console.log("Error connecting db");
else
    console.log("Db connected successfully");

app.get('/', (req, res) => res.send("Welcome to the quotes API! Refer to the instructions in https://github.com/kangyeelim/restful-api to use the API."));

app.use( (req, res, next) => {
   res.header("Access-Control-Allow-Origin", "*")
   res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS")
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
   next();
 })

let apiRoutes = require("./api-routes");
app.use('/api', apiRoutes);

if (process.env.NODE_ENV === 'development') {
  app.listen(port, function() {
    console.log("Running restful-api on port " + port);
  })
  module.exports = app;
} else {
  module.exports.handler = serverless(app);
}
