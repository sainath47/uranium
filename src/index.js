const express = require('express');
var bodyParser = require('body-parser');

const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', route);

// mongodb+srv://SAINATH47:COOLESTBEING@cluster0.fk14j.mongodb.net/test

mongoose.connect("mongodb+srv://SAINATH47:COOLESTBEING@cluster0.fk14j.mongodb.net/SAINATH47",{useNewUrlParser=true}).try({
    console.log("mongodb is connected")
}).catch(error)



app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
