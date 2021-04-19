// TODO: visit https://expressjs.com/
const express = require('express')
const app = express()

const mongoose = require('mongoose');
mongoose.connect(
    'mongodb://localhost:27017/whiteboard',
    {useNewUrlParser: true, useUnifiedTopology: true}
    );

// Configures CORS
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
        'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
});


const demos = require('./controllers/demos-controller')
demos(app)

// const quizzesController = require('./controllers/quizzes-controller')
// quizzesController(app)
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
require('./controllers/quizzes-controller')(app)
require('./controllers/questions-controller')(app)
require('./controllers/quiz-attempts-controller')(app)

app.listen(4000)