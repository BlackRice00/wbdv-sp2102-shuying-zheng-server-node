const MONGODB_URI="mongodb+srv://moira:P7vT7CcquwMcx1dO@cluster0.hgwcv.mongodb.net/quizdb?retryWrites=true&w=majority";
const mongoose = require('mongoose');

mongoose.connect(MONGODB_URI,
    {useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false});

module.exports = mongoose;