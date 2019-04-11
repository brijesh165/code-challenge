var express = require('express'),
  cors = require('cors'),
  bodyParser = require('body-parser'),
  mongoose = require('mongoose'),
  app = express();

app.use(cors({
  origin: 'http://localhost:4200'
}));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/titanicData', { useNewUrlParser: true });

let db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error: '));
db.once('open', function (callback) {
  console.log('Successfully connected to MongoDB.');
});

var Schema = mongoose.Schema;

var titanicSchema = new Schema({
  PassengerId: Number,
  Pclass: Number,
  Name: String,
  Sex: String,
  Age: Number,
  SibSp: Number,
  Parch: Number,
  Ticket: String,
  Fare: Number,
  Cabin: String,
  Embarked: String
});

let Titanic = mongoose.model('Titanic', titanicSchema);

app.get('/getData', function(req, res) {
  Titanic.find({}, function (error, data) {
    res.send({
      data: data
    });
  })
});

app.get('/getMaleCount', function(req, res) {
  Titanic.find({'Sex': 'male'}, function(error, data) {
    res.send({
      dataLength: data.length
    })
  })
});

app.get('/getFemaleCount', function(req, res) {
  Titanic.find({'Sex': 'female'}, function(error, data) {
    res.send({
      dataLength: data.length
    })
  })
});

app.listen(3000, function() {
  console.log('App is running @ localhost:3000')
});
