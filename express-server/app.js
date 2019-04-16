const express = require('express'),
  cors = require('cors'),
  bodyParser = require('body-parser'),
  mongoose = require('mongoose'),
  app = express(),
  router =express.Router();

app.use(cors({
  origin: 'http://localhost:4200'
}));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

mongoose.connect('mongodb://angular-mongo-db:27017/titanicData', { useNewUrlParser: true });

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

app.post('/postData', function(req, res) {
  console.log(req.body);
  Titanic.deleteMany({}, function (err, data) {
    if(err) {
      console.log(err);
    } else {
      console.log('Removed!!!');
    }
  });
  Titanic.insertMany(req.body, function(err, data) {
    if (err) {
      res.send({
        data: false,
        error: err
      })
    } else {
      res.send({
        status: true,
        data: req.body
      })
    }
  })
});

app.get('/getData', (req, res) => {
  const pageNo = parseInt(req.headers.pageno);
  const size = parseInt(req.headers.size);
  console.log(pageNo + ' ' + size);
  const query = {};
  if (pageNo < 0 || pageNo === 0) {
    response = {"error": true, "message": "invalid page number, should start with 1"}
    return res.json(response);
  }

  query.skip = size * (pageNo - 1);
  query.limit = size;

  Titanic.find({}, {}, query, function (err, data) {
    if (err) {
      response = {"error": true, "message": "Error fetching data"};
    } else {
      response = {"error": false, "message": data, "length": 418};
    }
    res.json(response);
  });
});

app.get('/getColumnName', function(req, res) {
  let columnName = [];
  titanicSchema.eachPath((pathname) => {
    columnName.push(pathname);
  });

  res.send({
    columnName: columnName
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
