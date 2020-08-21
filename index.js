let express = require('express');

let app = express();

let bodyParser = require('body-parser');

let mongoose = require('mongoose');

app.use(bodyParser.urlencoded({
   extended: true
}));

app.use(bodyParser.json());

var port = process.env.PORT || 8080;

mongoose.connect('mongodb://localhost/restful-api', { useNewUrlParser: true});

var db = mongoose.connection;

if(!db)
    console.log("Error connecting db");
else
    console.log("Db connected successfully");

app.get('/', (req, res) => res.send("Hello World!"));

let apiRoutes = require("./api-routes");
app.use('/api', apiRoutes);

app.listen(port, function() {
  console.log("Running restful-api on port " + port);
})
