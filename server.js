// // TODO: visit https://expressjs.com/
// const express = require('express')
// const app = express()
//
// // const mongoose = require('mongoose');
// // mongoose.connect(
// //     'mongodb://localhost:27017/whiteboard',
// //     {useNewUrlParser: true, useUnifiedTopology: true}
// //     );
// require('./db')
//
//
// // Configures CORS
// app.use(function (req, res, next) {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers',
//         'Content-Type, X-Requested-With, Origin');
//     res.header('Access-Control-Allow-Methods',
//         'GET, POST, PUT, PATCH, DELETE, OPTIONS');
//     next();
// });
//
//
// const demos = require('./controllers/demos-controller')
// demos(app)
//
// // const quizzesController = require('./controllers/quizzes-controller')
// // quizzesController(app)
// var bodyParser = require('body-parser')
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())
// require('./controllers/quizzes-controller')(app)
// require('./controllers/questions-controller')(app)
// require('./controllers/quiz-attempts-controller')(app)
//
// app.listen(4000)

require('dotenv').config()
let express = require('express');
let app = express();
let bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const mongoose = require('mongoose');
const MONGODB_URI="mongodb+srv://moira:P7vT7CcquwMcx1dO@cluster0.hgwcv.mongodb.net/whiteboard?retryWrites=true&w=majority";
try {
    mongoose.connect(MONGODB_URI,
        {useNewUrlParser: true, useUnifiedTopology: true},
        () => console.log('connected to db'));
} catch (err) {
    console.log('failed to connect to db')
}

app.use(function (req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers',
            'Content-Type, X-Requested-With, Origin');
        res.header('Access-Control-Allow-Methods',
            'GET, POST, PUT, PATCH, DELETE, OPTIONS');
        next();
    }
)

require('./controllers/quizzes-controller')(app);
require('./controllers/questions-controller')(app);
require('./controllers/quiz-attempts-controller')(app);

app.listen(process.env.PORT || 4000);