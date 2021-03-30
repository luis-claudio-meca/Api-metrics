const mongoose = require('mongoose')
require('dotenv').config();

mongoose.set('useNewUrlParser', true)
mongoose.set('useCreateIndex', true)


const uri = process.env.DB_URL;
mongoose.connect( uri,{ useUnifiedTopology: true }, (err) => {
    if (err) {
        console.log(err, uri);
    } else {
        console.log("Mongo Connected");
    }
});


mongoose.Promise = global.Promise;

module.exports = mongoose;